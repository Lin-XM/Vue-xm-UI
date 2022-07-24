import Vue from 'vue'
import App from './App.vue'
import Button from './components/Button'
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
// 单元测试 icon,loading,iconPosition, @click 事件
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    button.$mount()      // 挂载对象可以为空
    let useELement = button.$el.querySelector('use')
    const href = useELement.getAttribute('href')
    expect(href).to.eq('#setting')
    button.$el.remove()
    button.$destroy()
}
{    // 测试 loading的 icon
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading:true
        }
    })
    button.$mount()
    let useELement = button.$el.querySelector('use')
    const href = useELement.getAttribute('href')
    expect(href).to.eq('#loading')
    button.$el.remove()
    button.$destroy()
}
{   // 测试 svg 的 order
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    const {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{   // 测试 svg 的 order
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    const {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{   // 测试click
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
        }
    })
    button.$mount(div)
    let spy = chai.spy(function(){})
    button.$on('click',spy)
    let buttonElement = button.$el
    buttonElement.click()
    expect(spy).to.have.been.called()
    button.$el.remove()
    button.$destroy()
}
