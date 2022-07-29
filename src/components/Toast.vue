<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoDelay: {
                type: Number,
                default: 5000
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback()

                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(50%);
        font-size: 14px;
        color: white;
        padding: 0 16px;
        line-height: 1.8em;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        overflow: hidden;

        .line{
            height: 100px;
            border-left: 1px solid #999999;
            margin: 0 16px;
        }
    }
</style>