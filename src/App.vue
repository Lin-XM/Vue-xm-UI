<template>
    <div id="app">

        <div class="popoverGroup" @click="yyyy">
            <Popover>
                <template slot="content">
                    <div>popover 内容dadwadadawda</div>
                </template>
                <Button>点我</Button>
            </Popover>
        </div>

        <div class="tabsGroup">

            <XMTabs :selected.sync="selectedTab" direction="horizontal">
                <!--            <XMTabs :selected.="selectedTab" @update:selected="selectedTab = $event"  >-->
                <TabsHead>
                    <template slot="actions">
                        <button>设置</button>
                    </template>
                    <TabsItem name="woman">
                        <Icon name="setting"></Icon>
                        美女
                    </TabsItem>
                    <TabsItem name="finance">财经</TabsItem>
                    <TabsItem name="sports">体育</TabsItem>
                    <TabsItem name="movies" disabled>影视</TabsItem>
                </TabsHead>
                <TabsBody>
                    <TabsPane name="woman">美女相关资讯</TabsPane>
                    <TabsPane name="finance">财经相关资讯</TabsPane>
                    <TabsPane name="sports">体育相关资讯</TabsPane>
                    <TabsPane name="movies">影视相关资讯</TabsPane>
                </TabsBody>

            </XMTabs>
        </div>

        <div class="toastGroup">
            <button @click="showToast">点击展示toast</button>
            <div>
                <span>参数：输入的文本[message]，html标签功能[enableHtml],是否自动关闭[autoClose], 关闭时间延迟[execAutoClose],出现位置[position]</span>
            </div>
        </div>

        <div class="buttonClasses">
            <div>
                <Button>
                    普通按钮
                </Button>
                <Button icon="setting" icon-position="right" :loading="status2" @click="status2 = !status2">
                    功能按钮
                </Button>
                <Button icon="setting" :loading="status3" @click="status3 = !status3">
                    功能按钮
                </Button>
            </div>

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
                        <myCol span-num="6">
                            <div class="demo">
                                网格1
                            </div>
                        </myCol>
                        <myCol span-num="18">
                            <div class="demo">
                                网格2
                            </div>
                        </myCol>
                    </myRow>
                </div>

            </div>
            <div>
                <span>特殊网格，row参数[gutter],[align]</span>
                <span>特殊网格，col参数[gutter],[spanNum],[offset]</span>
                <div>
                    <myRow>
                        <myCol span-num="24" :ipad="{spanNum:12}" :narrow="{spanNum:8}">
                            <div class="demo">网格1</div>
                        </myCol>
                        <myCol span-num="24" :ipad="{spanNum:12}" :narrow="{spanNum:8}">
                            <div class="demo">网格2</div>
                        </myCol>
                        <myCol span-num="24" :ipad="{spanNum:12}" :narrow="{spanNum:8}">
                            <div class="demo">网格3</div>
                        </myCol>
                        <myCol span-num="24" :ipad="{spanNum:12}" :narrow="{spanNum:8}">
                            <div class="demo">网格4</div>
                        </myCol>
                        <myCol span-num="24" :ipad="{spanNum:12}" :narrow="{spanNum:8}">
                            <div class="demo">网格5</div>
                        </myCol>
                        <myCol span-num="24" :ipad="{spanNum:12}" :narrow="{spanNum:8}">
                            <div class="demo">网格6</div>
                        </myCol>
                    </myRow>
                </div>

            </div>


        </div>
        <div class="LayoutGroup">
            <Layout>
                <Header class="demo">header</Header>
                <Layout>
                    <Sider class="demo">siderbar</Sider>
                    <XMContent class="demo">content</XMContent>
                </Layout>
                <Footer class="demo">footer</Footer>
            </Layout>
        </div>


    </div>
</template>

<script>
    import Vue from 'vue'
    import Button from './components/Button'
    import Icon from "./components/Icon";
    import buttonGroup from './components/ButtonGroup'
    import myInput from "./components/Input";
    import myCol from './components/Column'
    import myRow from './components/Row'
    import Layout from "./components/Layout";
    import Header from "./components/Header";
    import Sider from "./components/Sider";
    import XMContent from "./components/Content";
    import Footer from "./components/Footer";
    import plugin from "./plugins/plugin";
    import XMTabs from "./components/Tabs";
    import TabsHead from "./components/TabsHead";
    import TabsBody from "./components/TabsBody";
    import TabsItem from "./components/TabsItem";
    import TabsPane from "./components/TabsPane";
    import Popover from "./components/Popover";
    // import Toast from "./components/Toast";


    Vue.use(plugin)
    export default {
        name: 'App',
        data() {
            return {
                status1: true,
                status2: true,
                status3: true,
                selectedTab: 'sports'
            }
        },
        components: {
            TabsPane,
            TabsBody,
            TabsHead,
            TabsItem,
            XMTabs,
            Button, buttonGroup, myInput, myCol, myRow, Layout, Header
            , Sider, XMContent, Footer, Icon, Popover
        },
        mounted() {
        },
        methods: {
            showToast() {
                this.$toast(`我的余额为：${parseInt(Math.random() * 100)}，我是信息`, {
                    closeButton: {
                        text: '充值',
                        callback() {
                            console.log('充钱了');
                        }
                    },
                    enableHtml: false,
                    autoClose: false,
                    execAutoClose: 3,
                    position: 'top',
                })
            },
            yyyy() {
                console.log('yyy')
            }
        }


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

    .popoverGroup {
        padding: 100px 100px;
        border: 1px solid green;
    }

    .buttonClasses {
        margin: 10px 0;

        > div:first-child {
            margin: 10px 0;

            > Button {
                margin: 0 4px;
            }
        }
    }

    .inputGroup {
        margin: 10px 0;
    }

    .gridGroup {
        .row {
            .demo {
                border: 1px solid #333333;
                background: #999;
                height: 40px;
            }
        }
    }

    .LayoutGroup {
        .layout {
            .header {
                background-color: #f6d7a9;
            }

            .sider {
                background-color: #999999;
                width: 100px;
                min-height: 80vh;
            }

            .content {
                background-color: orange;
                min-height: 80vh;
            }

            .footer {
                background-color: #cccccc;
                min-height: 10vh;
            }
        }

    }

    .box {
        margin: 10px 0;
    }

    #app {
        margin: 0 20px;
    }

</style>
