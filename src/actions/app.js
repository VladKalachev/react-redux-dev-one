export const changeMessage = (message) => ({
    type: 'CHANGE_MESSAGE',
    payload: { message }
})

export const changeToggle = (toggle) => ({
    type: 'CHANGE_TOGGLE',
    payload: {toggle}
})
