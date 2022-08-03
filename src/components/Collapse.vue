<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Collapse",
        props:{
            single:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            console.log('collapse:',this.single);
            this.$bus.$emit('isSingle',this.single)
        }

    }
</script>

<style scoped lang="scss">
    .collapse{

    }

</style>