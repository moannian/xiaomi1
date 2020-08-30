// 数据存储的应用箱
const STORAGE_KEY = 'mall'
export default {
    // 获取整个数据
    getStorage() {
        // 使用JSON的方法 获取mall信息
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    //设置值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage();
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }

    },
    // 获取值
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            if (val) {
                return val[key]
            }
        }
        return this.getStorage()[key]
    },

    // 清空某一个值
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            delete val[module_name][key]
        } else {
            delete val[key];

        }
        this.setItem(val)
    }
}