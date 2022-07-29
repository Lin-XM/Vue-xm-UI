<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "XM-Row",
        props: {
            gutter: {
                type: [Number, String]
            },
            // 网格对其方向
            colAlign: {
                type: String,
                validator(value) {
                    return ['left', 'right', 'center'].indexOf(value) >= 0
                },
                default: 'left'
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                return {marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px'}
            },
            rowClass() {
                return [this.colAlign && `align-${this.colAlign}`]
            }
        }
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        flex-wrap: wrap;
        .align-right{
            justify-content: flex-end;
        }
        .align-left{
            justify-content: flex-start;
        }
        .align-right{
            justify-content: center;
        }
    }
</style>