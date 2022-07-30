<template>
    <div class="tabsHeader">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: "TabsHeader"
    }
</script>

<style scoped>
    .tabsHeader{

    }
</style>