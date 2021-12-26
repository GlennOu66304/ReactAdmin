import service from "../utils/request";

export function departmentApi(data) {
    return service.request({
        url: "/department/add/",
        method: "post",
        data
    })

}


