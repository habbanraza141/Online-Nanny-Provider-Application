//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imagePath from '../Constants/imagePath';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

// create a component
const HeaderComp = ({
    onPressBack
}) => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={!!onPressBack? onPressBack:()=> goBack()} 
             >
                <Image source={imagePath.icBack}/>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
flexDirection: 'row',
alignItems: 'center',
height:moderateScale(42)
    },
});

//make this component available to the app
export default HeaderComp;
