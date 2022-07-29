<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Toast"
    }
</script>

<style scoped lang="scss">
    .toast{
        position: fixed;
        top: 0 ;
        left: 50%;
        transform: translateX(50%);
        font-size: 14px; color:white;
        padding: 0 16px;
        line-height: 1.8em;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: rgba(0,0,0,0.75);
        border-radius: 4px;
        box-shadow:0 0 3px 0 rgba(0,0,0,0.50) ;
    }
</style>