<template>
    <div class="collapseItem">
        <div class="title" @click="trigger">
            <Icon :name="open ? `plus` : `minus`"/>
            {{title}}
        </div>
        <transition name="bounce">
            <div class="content" v-if="open">
                <slot></slot>
            </div>
        </transition>

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
                this.$bus.$on('update:selected', (names) => {
                    this.open = names.indexOf(this.nameId) >= 0;
                })
        },
        methods: {
            trigger() {
                if (this.open) {
                    this.$bus.$emit('update:removeSelected', this.nameId)

                } else {
                    this.$bus.$emit('update:addSelected', this.nameId)
                }
            },
        }
    }
</script>

<style scoped lang="scss">

    .collapseItem {

        .bounce-enter-active {
            animation:  .5s linear;
        }
        .bounce-leave-active {
            animation:  .2s linear ;
        }
        @keyframes bounce-in {
            0% {
                transform: translateX(-100%);
            }

            100% {
                transform: translateX(0%);
            }
        }
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