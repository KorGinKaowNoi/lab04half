<template>
<div v-if="passenger">
     <router-link :to="{ name: 'passengerDetails', params: { _id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'passengerAirline', params: { _id } }"
        >Airline</router-link
      >
      <router-view :passenger="passenger" :isArray="isArray"/>
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