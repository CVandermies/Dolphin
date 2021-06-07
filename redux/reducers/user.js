//user variables
const initialState = {
    currentUser : null
}

//on lui passe par defaut le initialstate
//action appelle la DB, recupere ses donnees, les envoie au reducer qui met à jour le state
export const user = (state = initialState, action) => {
    return{
        ...state,
        currentUser: action.currentUser
    }
}