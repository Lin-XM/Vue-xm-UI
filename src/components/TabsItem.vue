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
        created: function () {
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
        &.active{
            background-color: skyblue;
         }
    }

</style>