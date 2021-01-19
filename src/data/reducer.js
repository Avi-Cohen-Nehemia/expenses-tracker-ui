import initialState from "./initialState";

// reducer functions here...

const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME" : return playerName(state, action);
        case "SET_SOUND" : return setSound(state);
        case "UPDATE_QUESTION": return updateQuestion(state, action);
        case "SET_STATISTICS": return setStatistics(state, action);
        case "RESET_GAME": return setReset(state);
        default: return state;
    }
};

export default reducer;