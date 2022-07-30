<template>
    <div class="inner" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
        </div>
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
                default: 1
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
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
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
                this.$bus.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()

                }
            },

        },
        computed: {
            toastClasses() {
                return {[`position-${this.position}`]: true}
            }
        }
    }
</script>

<style scoped lang="scss">


    .toast {

        font-size: 14px;
        color: white;
        padding: 0 16px;
        line-height: 1.8em;
        min-height: 40px;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);

        .message {
            padding: 8px 0;
        }

        .close {
            flex-shrink: 0;
        }

        .line {
            height: 100%;
            border: 1px solid #999999;
            margin: 0 16px;
        }

        &.position-top {
            top: 0;

        }

        &.position-bottom {
            bottom: 0;

        }

        &.position-middle {
            top: 50%;

        }

    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fade-in-bottom {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }

    @keyframes fade-in-top {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }

    .inner {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-bottom {
            bottom: 0;

            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: fade-in-bottom 1s linear;

            }
        }

        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);

            .toast {
                animation: fade-in 1s linear;

            }
        }

        &.position-top {
            top: 0;

            .toast {
                animation: fade-in-top 1s linear;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
    }

</style>