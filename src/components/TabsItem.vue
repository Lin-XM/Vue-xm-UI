<template>
    <div class="tabsItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabsItem",
        props:{
            disabled:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>

</style>