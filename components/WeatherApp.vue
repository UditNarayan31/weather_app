<template>
<div>
<v-card flat class="d-flex justify-center">
    <v-card class="pa-5" width="350" height="450" :elevation="6" id="app" :class="typeof weather.main != 'undefined' && temp.temp > 16 ? 'warm' : '' " dark>
      <v-text-field 
      @keypress="fetchResults" 
      v-model="query"
      dense
      class="rounded-tl-xl rounded-br-xl"
      outlined
      color="black"
      id="inputSearch"
      name="city"
      >
      </v-text-field> 
      <v-divider></v-divider>  
      <div>
      <h2 class="text--primary d-inine text-center">{{weather.name}}, {{country.country}}</h2>
      <div class="text--secondary subtitle-2 text-center">{{dateBuilder()}}</div>
      <v-card class="d-flex justify-center rounded-xl mt-5 pa-3" color="rgba(0,126,255,0.55)" :elevation="6">
      <div class="display-2 font-weight-bold">{{Math.round(temp.temp)}} °C</div>
      </v-card>
     
      <div class="display-1 black--text text-center font-italic font-weight-bold mt-10">{{desc.main}}</div>
  
     </div>
      </v-card> 
    </v-card>

</div>
 
</template>

<script>
 export default {
    data() {
      return {
        apikey:'682c8086a30607ef849bf8ad01f05a6c',
        baseUrl:'https://api.openweathermap.org/data/2.5/',
        query:'Goa',
        weather:{},
        country:'',
        temp:'',
        desc:''
       }
    },
    created(){
  this.fetchSomething();
    },

   methods: {
  async fetchSomething() {
    const ip = await this.$axios.$get('http://api.openweathermap.org/data/2.5/weather?q=goa&units=metric&APPID=682c8086a30607ef849bf8ad01f05a6c')
    this.weather = ip
     this.country = this.weather.sys
     this.temp = this.weather.main
     this.desc = this.weather.weather[0]
  },   
  fetchResults(e){
     if (e.key == 'Enter') {
        fetch(`${this.baseUrl}weather?q=${this.query}&units=metric&APPID=${this.apikey}`)  
        .then(res => {
          return res.json()
        }).then(this.setReslut)
     }
     },
   setReslut(results){
     this.weather = results
     this.country = this.weather.sys
     this.temp = this.weather.main
     this.desc = this.weather.weather[0]
   },
   dateBuilder(){
            let d = new Date();
            let months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day}, ${date}, ${month}, ${year}`;
        }
    }
  }
</script>
<style>
#app.warm{
background-image: url('https://i.pinimg.com/736x/7f/63/1e/7f631e577ed5e5ffbbce726f8ec03489.jpg');
background-position: center;
}
</style>