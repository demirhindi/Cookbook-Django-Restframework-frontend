<template>
 <NavBar/>
</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar.vue';
export default{
  name:"App",
  components:{NavBar},
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.user.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  }
  
}
</script>
<style>


</style>
