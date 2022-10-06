export const accessToken = "doacUserToken"
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem(accessToken))
}