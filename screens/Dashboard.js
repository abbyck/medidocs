import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
    return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            {/* Header nav */}
            <View style={styles.top}>

            </View>
            <SafeAreaView style={styles.scrollcontainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.mid}>
                        <Text style={styles.midheader}>What are you looking for ? </Text>
                        <TouchableOpacity style={styles.anghlogo}>
                            <Image

                                source={require('../assets/dashboard/anghlogo.png')}
                            />
                            <Image
                                source={require('../assets/dashboard/anghhand.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.doclogo}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text
                                    style={{ fontSize: 20, color: "#fff" }}
                                >Consult with </Text>
                                <Text style={{ fontSize: 20, color: "#fff" }}>
                                    a doctor
                            </Text>
                            </View>
                            <Image
                                source={require('../assets/dashboard/plussign.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.doclogo}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text
                                    style={{ fontSize: 20, color: "#fff" }}
                                >Pharmacy       </Text>
                                <Text
                                    style={{ fontSize: 20, color: "#fff" }}
                                >    </Text>
                            </View>
                            <Image
                                source={require('../assets/dashboard/pharm.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, marginTop: 20 }}>Find top doctors in specialities </Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ backgroundColor: "#fd295a", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 10, margin: 7 }}>
                                <Image
                                    source={require('../assets/dashboard/teeth.png')}
                                />
                                <Text style={{ color: '#fff' }}>Dentist      </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "#fd295a", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 10, margin: 7, height: 91 }}>
                                <Image
                                    source={require('../assets/dashboard/box.png')}
                                />
                                <Text style={{ color: '#fff' }}>General      </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "#fd295a", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 10, margin: 7 }}>
                                <Image
                                    source={require('../assets/dashboard/man.png')}
                                />
                                <Text style={{ color: '#fff' }}>Pediatrician </Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#fd295a", paddingRight: 100, paddingLeft: 100, paddingTop: 10, paddingBottom: 10, borderRadius: 5 }}>
                            <Image
                                source={require('../assets/dashboard/plus.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
            {/* Footer */}
            <View style={styles.bottom}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollcontainer: {
        flex: 0.8,
    },
    scrollView: {
        backgroundColor: '#fff',
    },
    top: {
        flex: 0.1,
        backgroundColor: "#fd295a",
        alignItems: "center"
    },
    mid: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgba(255,255,255,1)"
    },
    anghlogo: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 100,
        paddingRight: 100,
        borderRadius: 15,
        backgroundColor: "#fd295a",
    },
    doclogo: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 80,
        paddingRight: 80,
        borderRadius: 15,
        backgroundColor: "#fd295a",
    },
    bottom: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#efe2e1"
    },
    midheader: {
        fontSize: 30,
        marginTop: 20
    }
});