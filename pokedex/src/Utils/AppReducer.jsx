export default (state, action) => {
    switch(action.type){
        case "ADD_POKEMON_TO_CAUGHTLIST":
            return {
                ...state,
                pokemonList: [action.payload, ...state.pokemonList],
            }
        default:
            return state
    }
}