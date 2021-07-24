<template>
    <div v-if="isArray">from {{passenger.airline[0].country}} </div>
    <div v-else>from {{passenger.airline.country}}</div>
    <p v-if="isArray">and with slogan {{passenger.airline[0].slogan}}</p>
    <p v-else>and with slogan {{passenger.airline.slogan}}</p>
</template>
<script>
export default {
    props:['passenger','isArray']
}
</script>