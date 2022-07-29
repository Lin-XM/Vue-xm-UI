import Toast from '../components/Toast'


export default {
    install(Vue) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) currentToast.close()
            currentToast = createToast({Vue, message, propsData: toastOption,onclose:()=>{
                    currentToast = null
                }})
        }
    }
}


// helpful function
function createToast({Vue, propsData, message, onclose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData,
    })
    toast.$slots.default = [message]
    this.$on('close', onclose)
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}

let currentToast