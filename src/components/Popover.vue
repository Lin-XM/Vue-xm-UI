<template>
    <div class="popover" @click="onclick" ref="popover">
        <div ref="content" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true} " @click.stop>
            <slot name="content"></slot>
        </div>
        <span class="button" ref="trigger">
            <slot></slot>
        </span>
    </div>
</template>

<script>

    export default {
        name: "Popover",
        data() {
            return {
                visible: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                const contentRef = this.$refs.content
                const triggerRef = this.$refs.trigger
                document.body.appendChild(contentRef)

                let {top, height, left, width} = triggerRef.getBoundingClientRect()
                let {height: height2} = contentRef.getBoundingClientRect()
                let positions = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + height + window.scrollY
                    },
                    left: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                    right: {
                        left: left + window.scrollX + width,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                }


                //需要加上页面body 到 窗口顶端的距离
                contentRef.style.left = positions[this.position].left + 'px'
                contentRef.style.top = positions[this.position].top + 'px'

            },
            listenToDocument() {
                this.onClickDocument = (event) => {
                    // 判断点击区域为除内容【组件外】的 区域
                    if (!(this.$refs.popover && this.$refs.popover === event.target || this.$refs.popover.contains(event.target))) {
                        this.onClose()
                        document.removeEventListener('click', this.onClickDocument)
                    }
                }
                document.addEventListener('click', this.onClickDocument)
            },


            onOpen() {
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    this.listenToDocument()
                })
            },
            onClose() {
                this.visible = false
            },
            onclick(event) {
                // 判断点击的为 按钮
                if (this.$refs.trigger.contains(event.target)) {
                    if (this.visible === true) {
                        this.onClose()
                        document.removeEventListener('click', this.onClickDocument)
                    } else (
                        this.onOpen()
                    )
                }
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .button {
            display: inline-block;
        }

    }

    .content-wrapper {
        border: 1px solid #999;
        border-radius: 4px;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
        background-color: white;
        position: absolute;

        padding: .5em 1em;
        max-width: 12em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;

            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top-color: #999999;
                top: 100%;
            }

            &::after {
                border-top-color: white;
                top: calc(100% - 2px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-bottom-color: #999999;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 2px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-left-color: #999999;
                left: 100%;
            }

            &::after {
                border-left-color: white;
                left: calc(100% - 2px);

            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-right-color: #999999;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                right: calc(100% - 2px);

            }
        }
    }
</style>