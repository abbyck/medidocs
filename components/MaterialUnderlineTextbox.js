import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Placeholder"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 63,
    borderColor: "rgba(255,111,97,1)",
    borderWidth: 3,
    borderStyle: "solid"
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "rgba(255,111,97,1)",
    borderWidth: 0,
    fontSize: 16,
    lineHeight: 16
  }
});

export default MaterialUnderlineTextbox;
