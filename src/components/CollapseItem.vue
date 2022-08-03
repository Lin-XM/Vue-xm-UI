<template>
    <div class="collapseItem">
        <div class="title" @click="trigger">
            <Icon name="plus"/>
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon.vue'

    export default {
        name: "CollapseItem",
        components: {
            Icon
        },
        data() {
            return {
                open: false
            }
        },
        props: {
            title: {
                type: String,
                required: true,
                default: '标题'
            },
            nameId:{
                type:String,
                required:true
            }

        },
        mounted() {
            this.$bus.$on('isSingle', (isSingle) => {
                this.$bus.$on('update:selected', (name) => {
                    if (isSingle && name !== this.nameId) {
                        this.close()

                    }else if(name ===  this.nameId){
                        this.onOpen()
                    }
                })
            })
        },
        methods: {
            trigger() {
                if (this.open) {
                    this.open = false
                } else {
                    this.$bus.$emit('update:selected', this.nameId)
                }
            },
            close() {
                this.open = false
            },
            onOpen(){
                this.open= true
            }
        }
    }
</script>

<style scoped lang="scss">
    .collapseItem {

        > .title {
            border: 1px solid grey;
            display: flex;
            align-items: center;
            padding: 0 4px;
            min-height: 32px;

        }

        > .content {
            border-right: 1px solid grey;
            border-left: 1px solid grey;
            min-height: 32px;
            padding: 0 8px;
            display: flex;
            align-items: center;
        }

        &:first-child {
            > .title {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }

        &:last-child {
            > .content {
                border-bottom: 1px solid grey;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
    }
</style>