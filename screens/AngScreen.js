import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";

import Constants from 'expo-constants';

import FooterAng from '../components/FooterAng'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class AngScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <View style={styles.header}>
                    <Image style={{ width: 53, height: 90, marginTop: 30 }} source={require('../assets/ang/angh.png')}></Image>
                    {/* <Image source={require('../assets/ang/')}></Image> */}
                </View>
                <SafeAreaView style={styles.scrollcontainer}>
                    <ScrollView style={styles.scrollView}>
                        <Image
                            style={{
                                width: 1080, height: 2340

                            }}
                            source={require('../assets/ang/S.jpg')}
                        />
                    </ScrollView>
                </SafeAreaView>
                <FooterAng></FooterAng>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: "rgba(253, 41, 91, 1)",
        justifyContent: "center",
        alignItems: "center"
    },
    scrollcontainer: {
        flex: 0.8,
    },
    map: {
        flex: 1
    }

    
    // bottom: {
    //     flex: 0.5,
    //     alignItems: "center",
    //     justifyContent: "space-around",
    //     backgroundColor: "rgba(255,255,255,1)"
    // },
    // medidocs: {
    //     color: "rgba(255,255,255,1)",
    //     fontSize: 60,
    // },
    // enteryourmobile: {
    //     color: "rgba(33,36,44,1)",
    //     fontSize: 26,
    // },
    // contrycode: {
    //     color: "#909195",
    //     fontSize: 26,
    //     marginTop: 20
    // },
    // inlineinput: {
    //     flexDirection: 'row',
    // },
    // inputStyle: {
    //     marginTop: 20,
    //     flex: 1,
    //     height: 42,
    //     color: "#000",
    //     alignSelf: "stretch",
    //     paddingLeft: 15,
    //     paddingRight: 5,
    //     paddingBottom: 8,
    //     borderRadius: 42,
    //     borderColor: "rgba(255,111,97,1)",
    //     borderWidth: 2,
    //     borderStyle: "solid",
    //     fontSize: 26,
    // },
    // buttoncontainer: {
    //     backgroundColor: "rgba(255,111,97,1)",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     paddingRight: 16,
    //     paddingLeft: 16,
    //     paddingTop: 15,
    //     paddingBottom: 15,
    //     minWidth: 88,
    //     borderRadius: 81,
    //     borderColor: "#000000",
    //     borderWidth: 0,
    //     borderBottomWidth: 0,
    //     shadowOffset: {
    //         height: 1,
    //         width: 0
    //     },
    //     shadowColor: "#000",
    //     shadowOpacity: 0.35,
    //     shadowRadius: 5
    // },
    // caption: {
    //     color: "#fff",
    //     fontSize: 14,
    // }
});

