<template>
    <div class="tabsItem" @click="xxxxx">
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
            },
            name:{
                type:[String,Number],
                require:true
            }
        },
        data(){
            return{

            }
        },
        created() {
            console.log('fffffffffffffffffff');
            // console.log(this.eventBus);
            console.log(this.$bus)
            this.$bus.$on('update:selected',(name)=>{
                console.log(name);
            })
        },
        methods:{
            xxxxx(){
                this.$bus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped>

</style>