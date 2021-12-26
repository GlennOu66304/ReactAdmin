import cookies from 'react-cookies'

const token = "adminToken"
const user = "username"
export function setToken(value) {
    return cookies.save(token, value);
}

export function getToken(value) {
    return cookies.load(token);
}

export function setUsername(value) {
    return cookies.save(user, value);
}

export function getUsername(value) {
    return cookies.load(user);
}