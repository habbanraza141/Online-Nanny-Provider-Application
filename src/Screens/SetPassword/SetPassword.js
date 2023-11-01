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


const SetPassword = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView style={styles.container}>
            <View style={{  paddingVertical: moderateVerticalScale(10) }}>
                <HeaderComp />
            </View>                  
            <Text style={styles.headingText}>Set Password</Text>
                <Text style={styles.descText}>Set a password for your account</Text>
                <Text style={styles.numbText}>(+33) 34 56 78 901</Text>

                    <TextInputWithLabel
                        label=" Password"
                        placeholder="Enter your password"
                        secureTextEntry={isVisible}
                        inputStyle={{marginVertical: moderateVerticalScale(76)}}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showeye}
                        onPressRight={() => setVisible(!isVisible)}
                    />

                    <ButtonComponent
                        onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                        btnStyle={styles.btnStyle}
                        img={imagePath.icForward}
                    />


            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

//make this component available to the app
export default SetPassword;
