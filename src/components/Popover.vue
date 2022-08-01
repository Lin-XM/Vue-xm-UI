<template>
    <div class="popover" @click.stop="onclick" ref="popover">
        <div ref="content" class="content-wrapper" v-if="visible" @click.stop>
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
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.content)
                let {top, left} = this.$refs.trigger.getBoundingClientRect()
                //需要加上页面body 到 窗口顶端的距离
                this.$refs.content.style.left = left + window.scrollX + 'px'
                this.$refs.content.style.top = top + window.scrollY + 'px'
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
        filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
        background-color: white;
        position: absolute;
        transform: translateY(-100%);
        margin-top: -10px;
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
</style>