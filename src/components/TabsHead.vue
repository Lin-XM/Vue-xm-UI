<template>
    <div class="tabsHeader">
        <slot></slot>
        <div class="actions-wrapper">        <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabsHeader",
        created() {
            this.$emit('update:selected', 'this.$emit')

        }
    }
</script>

<style scoped lang="scss">
    $tab-height:40px;
    .tabsHeader{
        border:1px solid red;
        display: flex;
        height:$tab-height;
        justify-content: flex-start ;
        align-items: center;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>