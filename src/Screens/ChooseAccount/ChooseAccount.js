//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComponent from '../../Components/ButtonComponent';
import styles from './styles';
import navigationStrings from '../../Constants/navigationStrings';

// create a component
const ChooseAccount = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: moderateScale(24), paddingVertical: moderateVerticalScale(10) }}>
                <HeaderComp />
            </View>
            <View style={styles.container}>
                <Text style={styles.headingText}>CHOOSE YOUR ACCOUNT TYPE</Text>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../assets/images/houseicon.png')}
                            style={styles.imgStyle}
                    />

                    <Text style={styles.textStyle}>Agency</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../assets/images/freelancer.png')}
                            style={styles.imgStyle}
                    />

                    <Text style={styles.textStyle}>Freelancer</Text>
                </View>
                <ButtonComponent
                btnText={'continue'}
                    btnStyle={{ width: '100%', marginBottom: moderateVerticalScale(32) }} 
                    onPress={()=>navigation.navigate(navigationStrings.REGISTER)}/>
            </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default ChooseAccount;
