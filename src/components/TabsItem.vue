<template>
    <div class="tabsItem" @click="onClick" :class="activeClass" >
        <slot></slot>
        <div class="line" ref="line" v-if="active"></div>

    </div>
</template>

<script>
    export default {
        name: "TabsItem",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                require: true,
            }
        },
        data() {
            return {
                active: false,
            }
        },
        created() {

            this.$bus.$on('update:selected', (name) => {
                this.active = name === this.name;

            })
        },
        methods: {
            onClick() {
                if(this.disabled) return
                this.$bus.$emit('update:selected', this.name)
            },

        },
        updated() {
            if(this.active){
                let {width} = this.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
            }
        },
        computed: {
            activeClass(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
            },

        }
    }
</script>

<style scoped lang="scss">
    .tabsItem {
        flex-shrink: 0;
        padding: 0 2em;
        cursor:pointer;
        height: 100%;
        display: flex;
        align-items: center;
        color:black;
        position: relative;
        &.active{
            color: #0073ff;
            font-weight: bold;
            > .line {
                position: absolute;
                bottom: 0;
                border-bottom: 3px solid #0073ff;
                transition: all .5s linear;
                left: 0;
            }
         }
        &.disabled{
            color: #cccccc;
            cursor:not-allowed;
        }
    }

</style>