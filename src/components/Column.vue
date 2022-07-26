<template>
    <div class="col" :class="[spanNum && `col-${spanNum}`, offSet &&`offset-${offSet}`]"
         :style="{paddingLeft:gutter/2+'px', paddingRight:-gutter/2+'px'}"
    >
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
                gutter: 0
            }
        }

    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        background-color: grey;
        width: 50%;
        border: 1px solid red;

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