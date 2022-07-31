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
        },
        mounted() {
            this.$bus.$emit('update:selected', this.selected)
        }
    }
</script>

<style scoped lang="scss">

</style>