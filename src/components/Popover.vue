<template>
    <div class="popover" @click.stop="onclick" ref="popover">
        <div ref="content" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <span ref="trigger">
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
            listenToDocument(){
                this.onClickDocument =(event)=>{
                        // 判断点击区域为除内容【组件外】的 区域
                        if (!(this.$refs.popover && this.$refs.popover === event.target || this.$refs.popover.contains(event.target))) {
                            this.onClose()
                            document.removeEventListener('click', this.onClickDocument)

                        }
                    }
                console.log('监听document')
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
                console.log('关闭1');
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
        border: 1px solid red;
        display: inline-block;
        vertical-align: top;
        position: relative;


    }

    .content-wrapper {
        border: 1px solid #999;
        border-radius: 4px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        position: absolute;
        transform: translateY(-100%);
    }
</style>