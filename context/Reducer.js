export const Actions = {
    CREATE_USER: 'CREATE_USER',
    GET_USER_INFO: 'GET_USER_INFO'
}

const Reducer = (state, action) => {
    switch (action.type) {
        case Actions.CREATE_USER:
            return {
                ...state,
                username: action.payload
            };
        case Actions.GET_USER_INFO:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;