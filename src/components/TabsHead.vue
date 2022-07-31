<template>
    <div class="tabsHeader" >
        <slot></slot>
<!--        <div class="line" ref="line"></div>-->
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TabsHeader",
        data() {
            return {}
        },
    }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    .tabsHeader {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        border-bottom:1px solid #ccc;

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 3px solid #0073ff;
            transition: all .5s linear;
        }

        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>