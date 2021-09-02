export const rootUser1 = (one) => {
    return {
        type: "CHANGE",
        payload: {...one}
    }
}

export const loginHandler = () => {
    return {
        type: "LOGIN"
    }
}

export const logoutHandler = () => {
    return {
        type: "LOGOUT"
    }
}