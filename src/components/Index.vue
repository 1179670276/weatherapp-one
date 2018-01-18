<template>
  <div class="box">
    <div class="temperature">
      <p>{{WeatherData.weather}}</p>
      <p>
        <span>{{CityData.province}}</span>
        <span>{{CityData.city}}</span>
      </p>
      <h1> {{WeatherData.date|InterceptWeather}}&deg;</h1>
      <img src="./../../static/img/logo_e.png" alt="">
    </div>
    <div class="Aweek">
      <ul>
        <li  v-for="(lis,index) in population">
          <router-link :to="{name:'Info',params:{id:index}}">
            <span>{{lis.date|InterceptDate}}</span>
            <span>{{lis.temperature}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {
  data () {
    return {
      CityData:{},
      population:[],
      WeatherData:{
        weather:"",
        date:"",

      }
    }
  },
  filters:{
    InterceptWeather(val){
      return val.slice(-3,-2)
    },
    InterceptDate(val){
      return val.slice(0,2)
    }
  },
  mounted(){
    this.GetUserIpAddress()

  },
  methods: {
    //获取用户的ip
    GetUserIpAddress(){
      this.$http.get(this.$config.GetUserIp)
        .then( success=> {
          //console.log(success)
          this.GetUserAddress(success.data.ip)
        })
        .catch(error => {
          $.toast("请检查你的网络")
        })
    },
    //获取用户的地理位置
    GetUserAddress(ips){
      this.$http.jsonp(this.$config.GetUserAddress,{
        params:{
          ak:this.$config.IpKey.ak,
          ip:ips
        }
      })
        .then(success=>{
          //console.log(success)
         this.CityData= success.data.content.address_detail
          //console.log(this.CityData)
          this.GetWeatherData()
        })
        .catch(error=>{
          $.toast("请检查你的网络")
        })
    },
    //获取天气情况
    GetWeatherData(){
      this.$http.jsonp(this.$config.GetWeather,{
        params:{
          location:this.CityData.city,
          output:this.$config.IpKey.output,
          ak:this.$config.IpKey.ak
        }
      })
        .then(success=>{
          //console.log(success)
         this.population=success.data.results[0].weather_data
          console.log(this.population)
          this.WeatherData.weather=success.data.results[0].weather_data[0].weather
          this.WeatherData.date=success.data.results[0].weather_data[0].date
          //console.log(this.WeatherData)
        })
        .catch(error=>{
          $.toast("请检查你的网络")
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .box{
    height: 100%;
  }
  .temperature {
    padding-top: 120px;
    text-align: center;
    width: 100%;
    height: 80%;
    position: relative;
    background: -webkit-linear-gradient(#dd4879 , #fdd73f);
    background: -o-linear-gradient(#dd4879 , #fdd73f);
    background: -moz-linear-gradient(#dd4879 , #fdd73f);
    background: linear-gradient(#dd497a , #ffd32d);
  }
  .temperature p{
    color: #fff;
  }
  .temperature p:first-child{
    font-size: 25px;
  }
  .temperature h1{
    color: #fff;
    font-size: 80px;
    margin-top: 50px;
  }
  .temperature img{
    width: 100%;
    vertical-align: middle;
    position: absolute;
    left: 0;
    bottom: 0
  }
  .Aweek ul{
    padding: 0;
    margin: 0;
  }
  .Aweek ul li{
    height: 74px;
    line-height: 74px;
    list-style: none;
    border-bottom:1px solid #eee;
  }
  .Aweek ul li a{
    display: block;
    margin: 0 20px;
    color: #8d8d8d;
  }
  .Aweek ul li:first-child a{
    color: #ff54aa;
  }
  .Aweek ul li span:first-child{
    float: left;
  }
  .Aweek ul li span:last-child{
    float: right;
  }

</style>
