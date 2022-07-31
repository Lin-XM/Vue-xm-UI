<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "XM-Tabs",
        data() {
            return {
                selectedTab:''
            }
        },
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',        // 默认横向的
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }

            }
        },

        created() {
            this.$bus.$on('update:selected', (name) => {
                this.selectedTab = name

            })
        },
        mounted() {
            if (this.$children.length === 0) {
                console && console.warn &&
                console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'TabsHeader') {
                    // console.log(vm.$children[0]);
                    // firstVm = vm.$children[0]
                    // this.$bus.$emit('updated:selected',firstVm)
                }
            })
        }
    }
</script>

<style scoped lang="scss">

</style>