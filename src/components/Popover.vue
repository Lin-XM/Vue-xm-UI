<template>
    <div class="popover" @click="visible=!visible">
        <div class="content-wrapper" v-if="visible">
            <slot name="content" ></slot>

        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Popover",
        data(){
            return {
                visible:false
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover{
        border: 1px solid red;
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            border:1px solid #999;
            border-radius: 4px;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
            position: absolute;
            bottom: 100%;
            left: 0;
        }
    }
</style>