<template>
<div v-if="passenger">
    {{passenger.name}} 
    <div v-if="isArray">from {{passenger.airline[0].country}} </div>
    <div v-else>from {{passenger.airline.country}}</div>
    <p v-if="isArray">and with slogan {{passenger.airline[0].slogan}}</p>
    <p v-else>and with slogan {{passenger.airline.slogan}}</p>
</div>
</template>
<script>
import api_flight from '@/services/api_flight';
export default {
    name:'passengerDetails',
    props:['_id'],
    data(){
        return{
            passenger:null,
            isArray:false
        }
    },
    created(){
        api_flight.getByid(this._id)
        .then((response)=>{
          this.passenger=response.data
          if(Array.isArray(response.data.airline)){
              this.isArray=true
          }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
</script>