<template>
    404 {{resource}} not found Sooooory
</template>
<script>
export default {
    props:{
        resource:{
            type:String,
            required:true,
            default:'page'
        }
    }
}
</script>