<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "XM-Row",

    }
</script>

<style scoped lang="scss">
    .row{
        display: flex;
    }
</style>