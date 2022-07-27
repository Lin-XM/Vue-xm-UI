<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XM-Column",
        props: {
            spanNum: {
                type: [Number, String]
            },
            offSet: {
                type: [Number, String]
            },

        },
        data() {
            return {
                gutter: 0,


            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: -this.gutter / 2 + 'px',
                }
            },
            colClass(){
                return [ this.spanNum && `col-${this.spanNum}`, this.offSet &&`offset-${this.offSet}`]
            }
        }

    }
</script>

<style scoped lang="scss">
    .col {
        width: 50%;

        /*使用 scss 的 for loop */

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }


</style>