const iconReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ICON':
            return action.payload;
        default:
            return state;
    }
}


export default iconReducer;