<template>
    <div id="app">
        <div class="buttonGroup">
            <Button>
                按钮
            </Button>
            <Button icon="setting" icon-position="right" :loading="status2" @click="status2 = !status2">
                按钮
            </Button>
            <Button icon="setting" :loading="status3" @click="status3 = !status3">
                按钮
            </Button>
            <button-group>
                <Button icon="left">上一页</Button>
                <Button>更多</Button>
                <Button icon="right" icon-position="right">下一页</Button>
            </button-group>
        </div>
        <div class="inputGroup">
            <div class="box">
                <span>普通输入框</span>
                <div>
                    <myInput/>
                    <myInput inputValue="输入框1"/>
                    <myInput inputValue="输入框2"/>
                </div>


            </div>
            <div class="box">
                <span>特殊输入框，参数[isDisabled],[isReadOnly],[errorMsg]</span>
                <div>
                    <myInput inputValue="不可选中输入框" is-disabled/>
                    <myInput inputValue="只读输入框" is-read-only/>
                    <myInput inputValue="输入框" error-msg="用户名不能小于6个字符！"/>
                </div>

            </div>

        </div>


        <div class="gridGroup">
            <div>
                <span>普通网格</span>
                <div>
                    <myRow gutter="20">
                        <myCol class="demo-box">网格1</myCol>
                        <myCol class="demo-box">网格2</myCol>
                    </myRow>
                </div>

            </div>
            <div>
                <span>特殊网格，row参数[gutter],[align]</span>
                <span>特殊网格，col参数[gutter],[spanNum],[offset]</span>
                <div>
                    <myRow gutter="20" col-align="right">
                        <myCol class="demo-box" span-num="12"
                               :ipad="{spanNum:8,offset:0}"
                               :narrow="{spanNum:4,offset:0}"
                               :normal="{spanNum:2,offset:0}"
                               :wide="{spanNum:1,offset:0}"
                        >网格1
                        </myCol>
                        <myCol class="demo-box" span-num="12" offset="0"
                               :ipad="{spanNum:16,offset:0}"
                               :narrow="{spanNum:20,offset:0}"
                               :normal="{spanNum:22,offset:0}"
                               :wide="{spanNum:23,offset:0}"
                        >网格2
                        </myCol>
                    </myRow>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
    import Button from './components/Button'
    import buttonGroup from './components/ButtonGroup'
    import myInput from "./components/Input";
    import myCol from './components/Column'
    import myRow from './components/Row'

    export default {
        name: 'App',
        data() {
            return {
                status1: true,
                status2: true,
                status3: true,
            }
        },
        components: {
            Button, buttonGroup, myInput, myCol, myRow
        },

    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .iconpark-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-active-bg: #eee;
        --button-bg: white;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
    }

    .buttonGroup {
        margin: 10px 0;

        > Button {
            margin: 0 4px;
        }
    }

    .inputGroup {
        margin: 10px 0;
    }

    .gridGroup {
        .row {
            .demo-box {
                border: 1px solid #333333;
                background: #999;
            }
        }
    }

    .box {
        margin: 10px 0;
    }

    #app {
        margin: 20px;
    }

</style>
