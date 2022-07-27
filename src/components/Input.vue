<template>
    <div class="wrapper" >
        <label>
            <input class="inputContent" :class="[{ active: this.isDisabled || this.isReadOnly},{'error': this.errorMsg}]"
                   type="text" placeholder="备注"
                   :value="inputValue"
                   :disabled="this.isDisabled" :readonly="isReadOnly">
        </label>
        <template v-if="errorMsg">
            <Icon name="jinggao" class="icon-error" />
            <span class="error-info">{{errorMsg}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './Icon'
    export default {
        name: "XM-Input",
        data() {
            return {}
        },
        components:{
            Icon
        },
        props: {
            inputValue: {
                type: String,
                default: '默认值'
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            isReadOnly: {
                type: Boolean,
                default: false
            },
            errorMsg:{
                type:String
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "sass:math";

    .wrapper {
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        *{
            margin: 0 .25em;
        }
        input {
            font-size: 12px;
            height: 32px;
            border: 1px solid #999999;
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

        .active {
            border-color: #ccc;
            color: #ccc;
            cursor: not-allowed;

        }
        .error{
                border:1px solid #f1453d;
            &:hover {
                border-color: #f1453d;
            }
        }
        .error-info{
            color:#f1453d;
        }


    }


</style>