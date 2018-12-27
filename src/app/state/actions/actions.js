
export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';


export const userLogIn = () => {
    return {
        type: USER_LOG_IN,
        text: 'Пользователь вошёл в Систему'
    }
};

export const userLogOut = () => {
    return {
        type: USER_LOG_OUT,
        text: 'Пользователь вышел из Системы'
    }
};