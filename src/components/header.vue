<template>
   <div id="v-header">
       <header class="bar bar-nav">
         <a class="icon icon-left pull-left open-panel"></a>
         <h1 class="title">标题</h1>
         <a class="icon icon-settings pull-right"></a>
       </header>
   </div>

</template>

<script>
    export default {
        mounted() {
            this.demo()
          console.log()
        },
        data() {
            return {
                msg: 'dewdede'
            }
        },
        methods: {
            demo() {
                console.log('demo fun')
            }
        }
    }
</script>

<style scoped>
  .bar{
    margin-top: 20px;
    background-color: #ffffff00
  }
  .bar a{
    color: #fff;
  }
  .bar:after{
    background: none;
  }

</style>
