<template>
    <div class="col" :class="[`col-${spanNum}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XM-Column",
        props:{
            spanNum:{
                type:[Number, String]
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
    }



</style>