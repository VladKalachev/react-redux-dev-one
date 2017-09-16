const initialState = {
    message: 'Вася',
    animal: 'Кот',
    load: false
}

export default (app = initialState, action) => {

    const { type, payload } = action
    
    switch(type) {

        case 'CHANGE_MESSAGE':
            return {
                ...app,
                message: payload.message
            }

        case 'CHANGE_TOGGLE':
            return {
                ...app,
                load: payload.toggle
            }

        default:
            return app
    }
}