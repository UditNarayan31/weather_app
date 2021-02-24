<template>
<div>
<WeatherApp/>
<Form />
<list />
</div>
</template>

<script>
import Form from '~/components/Form.vue'
import List from '~/components/List.vue'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import WeatherApp from '~/components/WeatherApp'

export default {
  components: {
    Logo,
    VuetifyLogo,
    WeatherApp,
    Form,
    List
  }
}
</script>
