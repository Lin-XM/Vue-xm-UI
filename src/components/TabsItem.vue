<template>
    <div class="tabsItem" @click="xxxxx" :class="activeClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabsItem",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                require: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        created() {
            this.$bus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxxxx() {
                this.$bus.$emit('update:selected', this.name)
            }
        },
        computed: {
            activeClass(){
                return {
                    active:this.active
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabsItem {
        flex-shrink: 0;
        padding: 0 2em;
        cursor:pointer;
        height: 100%;
        display: flex;
        align-items: center;
        color:black;
        &.active{
            color: #0073ff;
            font-weight: bold;
         }
    }

</style>