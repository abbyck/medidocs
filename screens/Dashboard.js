import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Header nav */}
                <View style={styles.top}>
                </View>

                {/* Main view Section */}
                <ScrollView style={styles.scroller}>
                <View style={styles.mid}>
                    <Text>What are you looking for ? </Text>
                    <View>
                        <Text>अंग  </Text>
                    </View>
                    <View>
                        <Text>Consult with a doctor </Text>
                    </View>
                    <View>
                        <Text>Pharmacy </Text>
                    </View>
                    <Text>Find top doctors in specialities </Text>
                    <View>
                        <View>
                            <Text>Dentist </Text>
                        </View>
                        <View>
                            <Text>General </Text>
                        </View>
                        <View>
                            <Text>Pediatrician </Text>
                        </View>
                    </View>
                    <View>
                        <Text>medidocs PLUS</Text>
                    </View>
                    </View>
                </ScrollView>


                {/* Footer */}
                <View style={styles.bottom}>
                   
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
        flex: 0.13,
        backgroundColor: "rgba(255,111,97,1)",
        justifyContent: "center",
        alignItems: "center"
    },
    scroller: {
        flex: 0.77
    },
    mid: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgba(255,255,255,1)"
    },
    bottom: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#efe2e1"
    },
});
