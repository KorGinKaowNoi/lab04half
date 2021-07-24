<template>
<div class="list">
  <h1>hello world</h1>
  <passengerList v-for="passenger in passengers" :key="passenger._id" :passenger="passenger"/>
</div>
</template>

<script>
// @ is an alias to /src

import passengerList from '@/components/PassengerTemplate.vue';
import api_passenger from '@/services/api_flight.js';
export default {
  components:{
    passengerList
  },
  data(){
    return{
      passengers:null
    }
  },
  created(){
    api_passenger.get_flight()
    .then((response)=>{
       this.passengers=response.data.data
      // console.log(response.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
};
</script>
<style scoped>
.list{
  width: 800px;
  margin: 0 auto;
}
</style>
