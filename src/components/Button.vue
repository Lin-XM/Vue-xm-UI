<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true} " @click="$emit('click')">
        <Icon v-if="loading" class="loading iconpark-icon" name="loading"/>

        <Icon v-if="icon && !loading" :name="icon"/>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import Icon from "./Icon";

    export default {
        components: {Icon},
        // props: ['icon', 'iconPosition'],
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        },
        name: "XM-Button",
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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

    }

    .g-button:hover {
        border-color: var(--border-color-hover);
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

    .icon-right > .content {
        order: 1;
    }

    .icon-right > .iconpark-icon {
        order: 2;
        margin-right: 0;
        margin-left: 0.3em;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .loading {
        animation: spin 1s infinite linear;
    }


</style>