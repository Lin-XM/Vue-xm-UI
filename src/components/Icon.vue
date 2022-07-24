<template>
    <svg class="iconpark-icon">
        <use :href="`#${name}`"></use>
    </svg>
</template>

<script>
    import '../svgs'

    export default {
        props: ['name'],
        name: "Icon"
    }
</script>

<style scoped>
    .iconpark-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>