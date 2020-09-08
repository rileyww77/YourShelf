const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUT_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

export default projectsReducer;