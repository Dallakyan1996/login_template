export const localStorageLogin = "doacUser"
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem(localStorageLogin))
}