const userProjectReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUT_USER_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

export default userProjectReducer;