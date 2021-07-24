<template>
    <div class="passenger-card">
        <h2>{{passenger.name}} on trip {{passenger.trips}}</h2>
    </div>
</template>
<style scoped>
.passenger-card{
    border: 1px solid pink;
    padding: 10px;
    /* width: 250px; */
    cursor: pointer;
    margin: 3px;
}
</style>
<script>
export default {
    props:{
        passenger:{
            type:Object,
            required:true
        }
    }
}
</script>