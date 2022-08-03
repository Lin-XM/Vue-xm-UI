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
            },
            selected:{
                type: String,
            }
        },
        mounted() {
            this.$bus.$emit('isSingle',this.single)
            this.$bus.$emit('update:selected',this.selected)
            this.$bus.$on('update:selected',(nameId)=>{
                this.$emit('update:selected',nameId)
            })
        }

    }
</script>

<style scoped lang="scss">
    .collapse{

    }

</style>