import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class FooterAng extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <Image style={{ width: 24, height: 24 }} source={require('../assets/ang/history.png')}></Image>
                <Image style={{ width: 24, height: 24 }} source={require('../assets/ang/md-list.png')}></Image>
                <Image style={{ width: 24, height: 24 }} source={require('../assets/ang/chatbox.png')}></Image>
                <Image style={{ width: 24, height: 24 }} source={require('../assets/ang/person.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgb(240, 226, 225)"
    }
});
