import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import MaterialUnderlineTextbox from "./components/MaterialUnderlineTextbox";
import MaterialButtonPink from "./components/MaterialButtonPink";

// import * as Font from 'expo-font';



export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.medidocs}>medidocs</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.number}>
                        <Text style={styles.enteryourmobile}>Enter your mobile number</Text>
                        <View style={styles.inlineinput}>
                            <Text style={styles.contrycode}>+91</Text>
                            <TextInput
                                style={styles.inputStyle}
                            ></TextInput>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttoncontainer}>
                            <Text style={styles.caption}>CONTINUE</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 0.5,
        backgroundColor: "rgba(255,111,97,1)",
        justifyContent: "center",
        alignItems: "center"
    },
    bottom: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgba(255,255,255,1)"
    },
    medidocs: {
        color: "rgba(255,255,255,1)",
        fontSize: 60,
    },
    enteryourmobile: {
        color: "rgba(33,36,44,1)",
        fontSize: 26,
    },
    contrycode: {
        color: "#909195",
        fontSize: 26,
        marginTop: 20
    },
    inlineinput: {
        flexDirection: 'row',
    },
    inputStyle: {
        marginTop: 20,
        flex: 1,
        height: 42,
        color: "#000",
        alignSelf: "stretch",
        paddingLeft: 15,
        paddingRight: 5,
        paddingBottom: 8,
        borderRadius: 42,
        borderColor: "rgba(255,111,97,1)",
        borderWidth: 2,
        borderStyle: "solid",
        fontSize: 26,
    },
    buttoncontainer: {
        backgroundColor: "rgba(255,111,97,1)",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 1,
        minWidth: 88,
        borderRadius: 81,
        borderColor: "#000000",
        borderWidth: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          height: 1,
          width: 0
        },
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowRadius: 5
      },
      caption: {
        color: "#fff",
        fontSize: 14,
      }
});
