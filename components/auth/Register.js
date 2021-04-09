import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase'
import 'firebase/firestore'

export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }
    
    onSignUp(){
        //javascript nous permet d'ecrire tout dans les {} plutot que this.state.email etc.
        const{ email, password, name } = this.state;
        //la fonction ci dessous est asynchrone
        firebase.auth().createUserWithEmailAndPassword(email, password)
        //le then ci dessous va etre trigger quand on aura une réponse de firebase
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="name"
                    onChangeText={(name => this.setState({ name }))}
                />
                <TextInput
                    placeholder="email"
                    onChangeText={(email => this.setState({ email }))}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password => this.setState({ password }))}
                />

                <Button
                    onPress={() => this.onSignUp()}
                    title="Sign Up"
                />
            </View>
        )
    }
}