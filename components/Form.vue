<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <v-text-field 
      v-model="username" 
      data-username
      dense
      outlined
      ></v-text-field>
      <input type="submit">
    </form>

    <v-alert
      class="message" 
      v-if="submitted"
      dense
      color="red"
    >
      Thank you for your submission, {{ username }}.
    </v-alert>
  </div>
</template>
<script>
  export default {
    name: "FormSubmitter",

    data() {
      return {
        username: '',
        submitted: false
      }
    },

    methods: {
      handleSubmit() {
        this.submitted = true
      }
    }
  }
</script>