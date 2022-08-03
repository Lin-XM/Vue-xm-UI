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
                type: Array,
            },
        },
        data(){
            return {
            }
        },
        mounted() {
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))

            this.$bus.$emit('update:selected',this.selected)
            this.$bus.$on('update:addSelected',(nameId)=>{
                if(this.single){
                    selectedCopy = [nameId]
                }else{
                    selectedCopy.push(nameId)
                }
                this.$emit('update:selected',selectedCopy)
                this.$bus.$emit('update:selected',selectedCopy)

            })
            this.$bus.$on('update:removeSelected',(nameId)=>{
                let index = selectedCopy.indexOf(nameId)
                selectedCopy.splice(index,1)
                this.$emit('update:selected',selectedCopy)
                this.$bus.$emit('update:selected',selectedCopy)

            })
        }

    }
</script>

<style scoped lang="scss">
    .collapse{

    }

</style>