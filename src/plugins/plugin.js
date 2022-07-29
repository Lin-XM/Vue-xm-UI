import Toast from '../components/Toast'
export default {
    install(Vue){
        Vue.prototype.$toast=function(message,toastOptions){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton:toastOptions.closeButton
                }
            })
            toast.$slots.default = [message]

            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}