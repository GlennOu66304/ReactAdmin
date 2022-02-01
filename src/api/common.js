import service from "../utils/request";

export function TableList(paramas) {
    return service.request({
        url: paramas.url,
        method: paramas.method || "post",
        data: paramas.data
    })

}