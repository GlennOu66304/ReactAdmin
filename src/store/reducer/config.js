const config = {
    status: [
        { label: "config", value: false },
        { label: "启用", value: true }
    ]
}


const configReducer = function (state = config, action) {
    return state;
}

export default configReducer;