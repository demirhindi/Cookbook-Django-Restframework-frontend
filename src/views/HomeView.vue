<template>
  <div class="container">
    
    <HomeContainer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeContainer from '@/components/HomeContainer.vue';


export default {
  name: 'HomeView',
  components: {
    HomeContainer
  }
}
</script>
