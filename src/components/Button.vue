<template>
    <div>
        <button class="g-button" >
            <img class="icon" src="../assets/齿轮.svg" alt="">
            按钮
        </button>
    </div>
</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);

    }

    .g-button:hover {
        border-color: var(--border-color);
    }

    .g-button:active {
        background-color: var(--button-active-bg);
    }

    .g-button:focus {
        outline: none;
    }
</style>