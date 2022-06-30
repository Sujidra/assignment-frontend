let defaultUserSate = {
    login: false,
    userDetails: {},
    token: ""
}

export default (state = defaultUserSate, action) => {
    // console.log("videos" + JSON.stringify(state))
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                login: action.login,
                token: action.token
            };
        case 'SET_USER_DETAILS':
            return {
                ...state,
                userDetails: action.userDetails,
            };

        default:
            return state;
    }
};
