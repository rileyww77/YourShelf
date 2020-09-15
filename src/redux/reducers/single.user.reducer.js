const singleUserReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SINGLE_USER':
        return action.payload
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default singleUserReducer;