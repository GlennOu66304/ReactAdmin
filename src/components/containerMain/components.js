const files = require.context("../../views/", true, /\.js$/)
const Components = []
files.keys().map(key => {
    if (key.includes('./index/') || key.includes('./login/')) {
        return false
    }

    const splitFileName = key.split(".")
    const jsonObj = {}
    const path = `/index${splitFileName[1].toLowerCase()}`
    const component = files(key).default
    jsonObj.path = path
    jsonObj.component = component
    Components.push(jsonObj)
})

export default Components
