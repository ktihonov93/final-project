export default (state, action) => {
    switch(action.type){
        case "ADD_POKEMON_TO_CAUGHTLIST":
            return {
                ...state,
                caught: [action.payload, ...state.caught],
            };
        case "REMOVE_POKEMON_FROM_CAUGHTLIST":
            return {
                ...state,
                caught: state.caught.filter(p => p.id !== action.payload)
            }
        default:
            return state
    }
}