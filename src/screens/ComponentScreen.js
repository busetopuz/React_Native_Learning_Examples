import React from "react";
import {Text, StyleSheet, View} from 'react-native';


const ComponentScreen = () => {
    return<View>
        <Text style={  styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeaderStyle}>My name is Buse</Text>
    </View> 
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },

    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;