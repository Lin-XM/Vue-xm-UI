<template>
    <div class="tabsPane" :class="activeClass" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabsPane",
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: [String, Number],
                require: true
            }
        },
        created() {
            this.$bus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        computed: {
            activeClass() {
                return {
                    active: this.active
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    .tabsPane{
        &.active{
            padding: 1em;
        }
    }
</style>