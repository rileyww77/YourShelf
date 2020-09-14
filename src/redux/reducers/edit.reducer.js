const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'EDIT_IMAGE':
            return {
                ...state,
                image: action.payload
            }
        case 'EDIT_SUPPLY':
            return {
                ...state,
                supplies: action.payload
            }
        case 'EDIT_DESCRIPTION':
            return {
                ...state,
                description: action.payload
            }
        case 'PUT_EDITS':
            return action.payload
        default:
            return state;
    }
}


export default editReducer;