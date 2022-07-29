<template>
    <div class="toast" ref="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
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
            },
            enableHtml: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.execAutoClose()
            this.updateStyles()

        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoDelay * 1000)
                }
            },
            updateStyles() {
                // 解决子元素横线高度错误 bug
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
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
        transform:translateX(-50%);
        font-size: 14px;
        color: white;
        padding: 0 16px;
        line-height: 1.8em;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);

        .message{
            padding: 8px 0 ;
        }
        .close {
            flex-shrink: 0;
        }

        .line {
            height: 100%;
            border: 1px solid #999999;
            margin: 0 16px;
        }
    }
</style>