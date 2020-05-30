import W from "./helpers/W"

const JsHelperPlugin = {
    installed: false,
    install(Vue) {
        if (this.installed) return
        this.installed = true

        Vue.component('W', W)
    }
}

export default JsHelperPlugin
