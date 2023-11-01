//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../styles/colors';
import imagePath from '../Constants/imagePath';

// create a component
const ButtonComponent = ({
    btnText,
    btnStyle = {},
    onPress = () => { },
    img,
    btnTextStyle= {}
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}>

            {!!img ? 
            <Image 
            style={{tintColor: colors.white}}
            source={img} /> :
                <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
            }
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        height: moderateVerticalScale(48),
        backgroundColor: colors.themeColor,
        borderRadius: moderateScale(4),
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnTextStyle: {
        fontSize: scale(12),
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

//make this component available to the app
export default ButtonComponent;
