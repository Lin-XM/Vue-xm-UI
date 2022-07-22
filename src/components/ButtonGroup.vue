<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ButtonGroup"
    }
</script>

<style scoped>
    .button-group{
        display: inline-flex;
        vertical-align: middle;
    }
    .button-group >.g-button{
        border-radius: 0;
        margin-left: -1px;
    }
    .button-group >.g-button:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }
    .button-group >.g-button:nth-child(3){
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
    }
    .button-group >.g-button:hover{
        position: relative;
        z-index: 1;
    }


</style>