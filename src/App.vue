<template>
  <div id="app">
    <transition>
      <router-view>
      </router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
   data() {
    return {
      
    }
  },
  mounted: function(){

  },
  methods:{
  
  }
}
</script>

<style>
/* .view{
  width:1000px;
  float: left;
  padding-bottom: 50px;
} */
</style>
