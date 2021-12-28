import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail
            title="Forest"
            imageSource={require('../../assets/forest.png')}
            score={9}
        />
        <ImageDetail
            title="Beach"
            imageSource={require('../../assets/beach.png')}
            score={7}
        />
        <ImageDetail
            title="Mountain"
            imageSource={require('../../assets/mountain.png')}
            score={10}
        />
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;