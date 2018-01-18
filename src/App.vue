<template>
  <div id="app">
    <div class="page-group">
      <div class="page">
          <v-header></v-header>
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponents from './components/header.vue';
export default {
  name:"app",
  components:{
    "v-header":HeaderComponents
  }
}

</script>

<style>
  .page{
    display:block;
    background: #fff;
    font-family: "思源黑体";
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
