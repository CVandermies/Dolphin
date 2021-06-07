import { USER_STATE_CHANGE } from '../constants/index'
import * as firebase from 'firebase'

//appel à firestore, si on arrive a obtenir un snapshot le currentuser est màj et 
//sera utilisé dans reducers/user
export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
            else {
                console.log('does not exist')
            }
        })
    }
    )}