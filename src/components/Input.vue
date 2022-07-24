<template>
    <div class="wrapper" >
        <label>
            <input class="inputContent" :class="{ active: this.isDisabled}" type="text" placeholder="备注" :value="inputValue"
                   :disabled="this.isDisabled">
        </label>
    </div>
</template>

<script>
    export default {
        name: "XM-Input",
        data() {
            return {}
        },
        props: {
            inputValue: {
                type: String,
                default: 'text'
            },
            isDisabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "sass:math";

    .wrapper {
        font-size: 12px;
        display: inline-block;
        margin: 0 4px;

         .active {
            border-color: #ccc;
            color: #ccc;
        }

        .inputContent {
            font-size: inherit;
            height: 32px;
            border: 1px solid #999;
            border-radius: 4px;
            padding: 0 8px;

            &:hover {
                border-color: #333;
            }

            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
            }
        }
    }


</style>