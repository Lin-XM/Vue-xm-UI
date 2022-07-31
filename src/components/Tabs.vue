<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "XM-Tabs",
        data() {
            return {}
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
        },
        mounted() {
            this.$children.forEach(vm => {
                if (vm.$options.name === 'TabsHeader') {
                    vm.$children.forEach(item => {
                        if(item.$options.name=== 'TabsItem' && item.name === this.selected){
                            this.$bus.$emit('update:selected',this.selected,item)
                            console.log('tabsItem',item.$el);
                        }
                    })
                }
            })
        }
    }
</script>

<style scoped lang="scss">

</style>