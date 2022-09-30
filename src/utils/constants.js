export const localStorageLogin = "dlcoUser"
export const getUserInfo = () =>{
    return  JSON.parse(localStorage.getItem(localStorageLogin))
}