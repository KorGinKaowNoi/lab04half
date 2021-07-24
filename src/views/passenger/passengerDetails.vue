<template>
    <h2>name: {{passenger.name}} with trips {{passenger.trips}}</h2>
</template>
<script>
export default {
    props:['passenger']
}
</script>