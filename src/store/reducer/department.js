const config = {
    status: [
        { label: "department", value: false },
        { label: "启用", value: true }
    ]
}

const departmentReducer = function (state = config, action) {
    return state;
}

export default departmentReducer;