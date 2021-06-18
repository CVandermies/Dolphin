import{ USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE } from "../constants"

//user variables
const initialState = {
    currentUser : null,
    posts: [],
    following: [],
}

//on lui passe par defaut le initialstate
//action appelle la DB, recupere ses donnees, les envoie au reducer qui met à jour le state
export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }

        case USER_POSTS_STATE_CHANGE:
            return {
                ...state,
                posts: action.posts
            }
        
            case USER_FOLLOWING_STATE_CHANGE:
                return {
                    ...state,
                    following: action.following
                }
        default:
            return state;
    }
}
    