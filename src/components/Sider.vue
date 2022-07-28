<template>
        <div class="sider" v-if="visible">
            <button @click="visible=false">close</button>
            <slot></slot>
        </div>
</template>

<script>
    export default {
        name: "SiderBar",
        data() {
            return {
                visible: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 2px;
            right: 2px;
        }
    }

</style>