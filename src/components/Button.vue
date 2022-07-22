<template>
        <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
            <Icon class="loading" name="loading"/>

            <Icon v-if="icon" :name="icon"/>
            <div class="content">
                <slot></slot>
            </div>
        </button>
</template>

<script>
    import Icon from "./Icon";
    export default {
        components: {Icon},
        // props: ['icon', 'iconPosition'],
        props:{
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    console.log(value);
                    return !(value !== 'left' && value !== 'right');
                }
            }
        },
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
    @keyframes spin {
         0%{
             transform:rotate(0deg)
         }
        100%{
            transform:rotate(360deg)
        }
    }
    .loading{
        animation:  spin 1s infinite linear;
    }


</style>