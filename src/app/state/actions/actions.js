// @flow

export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';


export type UserAction = {
    type: string,
    text: string
}

export const userLogIn: () => UserAction = () => ({
    type: USER_LOG_IN,
    text: 'Пользователь вошёл в Систему'
});

export const userLogOut: () => UserAction = () => ({
    type: USER_LOG_OUT,
    text: 'Пользователь вышел из Системы'
});