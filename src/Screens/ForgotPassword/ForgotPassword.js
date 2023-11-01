import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ButtonComponent from '../../Components/ButtonComponent';
import styles from './styles';
import navigationStrings from '../../Constants/navigationStrings';
import imagePath from '../../Constants/imagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const ForgotPassword = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComp />
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent:'center' ,}}>
                        <Image
                            source={imagePath.lock}
                            style={styles.lockStyle} />
                    </View>

                    <View style={{ flex: 0.4 }}>
                        <Text style={styles.headingText}>Forgot Password ?</Text>
                        <Text style={styles.descText}>Enter the email associated with your account</Text>
                    </View>

                    <View  style={{ flex: 0.4,  }}>
                        <TextInputWithLabel
                            label=" Email"
                            placeholder="Enter your email"
                            inputStyle={{}}
                        />

                        <ButtonComponent
                            btnText={'send'}
                            onPress={() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}
                        />

                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};



//make this component available to the app ForgotPassword
export default ForgotPassword;
