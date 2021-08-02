<template>
<div id="flashMessage" v-if="Gstore.flashMessage">
  {{Gstore.flashMessage}}
</div>
    <h2>name: {{passenger.name}} with trips {{passenger.trips}}</h2>
    <button @click="update" type="button">update passenger data</button>
</template>
<script>
export default {
    props:['passenger'],
    inject:['Gstore'],
    methods:{
        update(){
            this.Gstore.flashMessage = 'update is in progress'
            setTimeout(()=>{
                this.Gstore.flashMessage=''
                this.$router.push({
                    name:'Home'
                })
            },5000)
        }
    }
}
</script>
<style>
@keyframes yellowfade {
  from{
    background:green;
  }
  to{
    background: transparent;
  }
}
#flashMessage{
  animation-name: yellowfade;
  animation-duration: 5s;
}
</style>