const INITIAL_STATE = {
    current: "white",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                current: action.payload
            }
        default:
            return state
    }
}