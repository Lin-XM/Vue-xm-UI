<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
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
            xxx() {
                this.visible = !this.visible
                console.log(this.visible);
                console.log('切换');
                if (this.visible === true) {
                    setTimeout(() => {
                        console.log('新增加一个监听器');
                        let eventHandler = () => {
                            this.visible = false
                            console.log("删除监听器");
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        border: 1px solid red;
        display: inline-block;
        vertical-align: top;
        position: relative;

        .content-wrapper {
            border: 1px solid #999;
            border-radius: 4px;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
            position: absolute;
            bottom: 100%;
            left: 0;
        }
    }
</style>