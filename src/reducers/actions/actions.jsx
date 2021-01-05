import UserActionsTypes from '../actions/types'

export const updateUser = (user) => ({
        type: UserActionsTypes.UPDATE_USER,
        payload: user
})

export const removeUser = () => ({
    type: UserActionsTypes.REMOVE_USER
})

export const updateTable = (tableUserData) => ({
    type: UserActionsTypes.UPDATE_TABLE,
    payload: tableUserData
})

export const addUser = (email) => ({
    type: UserActionsTypes.ADD_USER,
    payload: email
})

