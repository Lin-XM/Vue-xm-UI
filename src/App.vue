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
                <myInput  />
                <myInput inputValue="输入框1" />
                <myInput inputValue="输入框2" />

            </div>
            <div class="box">
                <myInput inputValue="不可选中输入框" is-disabled/>
                <myInput inputValue="只读输入框" is-read-only/>
                <myInput inputValue="输入框" error-msg="用户名不能小于6个字符！"/>
            </div>

        </div>
    </div>
</template>

<script>
    import Button from './components/Button'
    import buttonGroup from './components/ButtonGroup'
    import myInput from "./components/Input";
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
            Button,buttonGroup,myInput
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
    .buttonGroup{
        margin: 10px 0 ;
        >Button{
            margin: 0 4px;
        }
    }
    .inputGroup{
        margin: 10px 0 ;
    }
    .box{
        margin: 10px 0;
    }
    #app {
        margin: 20px;
    }

</style>
