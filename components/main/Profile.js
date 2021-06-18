import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native'

import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'

function Profile(props) {

        const { currentUser, posts } = props;
        console.log({currentUser,posts})
    
        return (
        <View>
            <Text>{currentUser.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInfo: {
        margin: 20
    },
    containerGallery: {
        flex: 1
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1
    }
})

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts,
    following: store.userState.following
})
export default connect(mapStateToProps, null)(Profile);