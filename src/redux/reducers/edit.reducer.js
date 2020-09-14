const editReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUT_EDITS':
            return action.payload;
        default:
            return state;
    }
}


export default editReducer;