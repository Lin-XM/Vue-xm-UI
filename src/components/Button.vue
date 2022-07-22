<template>
        <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
            <svg v-if="icon" class="iconpark-icon">
                <use :href="`#${icon}`"></use>
            </svg>
            <div class="content">
                <slot></slot>
            </div>
        </button>
</template>

<script>
    export default {
        props: ['icon', 'iconPosition'],
        name: "Button",
        data() {
            return {}
        }
    }
</script>

<style scoped>

    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: center;

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

    .content {
        order: 2;
    }
     .iconpark-icon {
        order: 1;
        margin-right: 0.3em;
        margin-left: 0;
    }

    .icon-right >.content {
        order: 1;
    }

    .icon-right >.iconpark-icon {
        order: 2;
        margin-right: 0;
        margin-left: 0.3em;
    }


</style>