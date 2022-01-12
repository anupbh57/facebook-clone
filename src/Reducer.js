export const initialState = {
    user: null
};
I
export const actionTypes = {
    SET_USER: "SET USER"
};

const reducer = (state, action) => {
    consol.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }
};

export default reducer;
