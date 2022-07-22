<template>
    <svg  class="iconpark-icon">
        <use :href="`#${name}`"></use>
    </svg>
</template>

<script>
    export default {
        props:['name'],
        name: "Icon"
    }
</script>

<style scoped>

</style>