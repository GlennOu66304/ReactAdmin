const tokenAdmin = "adminToken"

export function setToken(value) {
    return sessionStorage.setItem(tokenAdmin, value);
}

export function getToken(value) {
    return sessionStorage.getItem(tokenAdmin);
}