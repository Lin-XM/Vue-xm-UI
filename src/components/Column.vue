<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!['spanNum', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: "XM-Column",
        props: {
            // 每个的网格的跨度
            spanNum: {
                type: [Number, String]
            },
            // 网格中间间隔
            offset: {
                type: [Number, String]
            },
            // 自适应判断
            ipad: {
                type: Object,
                validator: validator
            },
            narrow: {
                type: Object,
                validator: validator
            },
            normal: {
                type: Object,
                validator: validator
            },
            wide: {
                type: Object,
                validator: validator
            },


        },
        data() {
            return {
                // 间隔
                gutter: 0,
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px',
                }
            },
            colClass() {
                let {spanNum, offset, ipad, narrow, normal, wide} = this
                let {createClasses} = this

                return [
                    ...createClasses({spanNum,offset}),
                    ...createClasses(ipad,'ipad-'),
                    ...createClasses(narrow,'narrow-'),
                    ...createClasses(normal,'normal-'),
                    ...createClasses(wide,'wide-'),


                ]
            }
        },
        methods:{
            createClasses(obj,str=''){
                // str = ipad-  || narrow- || normal-
                if(!obj) return []
                let array = []
                if(obj.spanNum){
                    array.push(`col-${str}${obj.spanNum}`)
                }
                if(obj.offset){
                    array.push(`col-${str}${obj.offset}`)
                }
                return array

            }
        }

    }
</script>

<style scoped lang="scss">
    .col {
        /*使用 scss 的 for loop */
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        /*手机端*/

        /* iPad */
        @media (min-width: 577px) and (max-width: 768px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        /* narrow pc  */
        @media (min-width: 769px) and (max-width: 992px) {
            $class-prefix: col-narrow-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        /* normal pc  */
        @media (min-width: 993px) and (max-width: 1200px) {
            $class-prefix: col-normal-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-normal-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        /* wide pc  */
        @media (min-width: 1201px) {
            $class-prefix: col-wide-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }


</style>