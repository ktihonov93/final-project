export default (state, action) => {
    switch(action.type){
        case "ADD_POKEMON_TO_CAUGHTLIST":
            return {
                ...state,
                pokemonList: [action.payload, ...state.pokemonList],
            };
        case "REMOVE_POKEMON_FROM_CAUGHTLIST":
            return {
                ...state,
                pokemonList: state.pokemonList.filter(p => p.id !== action.payload)
            }
        default:
            return state
    }
}