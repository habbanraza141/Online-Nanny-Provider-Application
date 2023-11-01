//import liraries
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
// create a component
const Register = ({ navigation }) => {
    const [isTrue, setTrue] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
            <View style={{  paddingVertical: moderateVerticalScale(10) }}>
                <HeaderComp />
            </View>                
            <KeyboardAwareScrollView>
                    <View style={{ flexDirection: 'row' }} >
                        <TextInputWithLabel
                            label=" First name"
                            placeholder="Please enter your first name"
                            inputStyle={{ flex: 1 }}
                        />

                        <View style={{ marginHorizontal: moderateScale(8) }} />

                        <TextInputWithLabel
                            label=" Last name"
                            placeholder="Please enter your last name"
                            inputStyle={{ flex: 1 }}
                        />

                    </View>


                    <TextInputWithLabel
                        label=" Salon Name"
                        placeholder="Scissors N' Razors"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                    />


                    <TextInputWithLabel
                        label=" Date of Birth"
                        placeholder="02/10/1985"
                        inputStyle={{}}
                    />


                    <TextInputWithLabel
                        label=" Phone Number"
                        placeholder="(+33) 34 56 78 901"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                    />
                    <TextInputWithLabel
                        label=" Email"
                        placeholder="schowalter.kamille@yahoo.com"
                        inputStyle={{}}
                    />


                    <View style={{ flexDirection: 'row', marginVertical: moderateVerticalScale(28) }} >
                        <TextInputWithLabel
                            label=" Country"
                            placeholder="France"
                            inputStyle={{ flex: 1 }}
                        />

                        <View style={{ marginHorizontal: moderateScale(8) }} />

                        <TextInputWithLabel
                            label=" Postal/ Zip Code"
                            placeholder="75001"
                            inputStyle={{ flex: 1 }}
                        />

                    </View>


                    <TextInputWithLabel
                        label=" Address"
                        placeholder="3413 Carol Motorway"
                        inputStyle={{}}
                    />


                    <TextInputWithLabel
                        label=" Referral Code"
                        placeholder="Noovv1257"
                        inputStyle={{ marginVertical: moderateVerticalScale(28) }}
                    />

                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={()=>setTrue(!isTrue)} >
                        <Image
                            source={isTrue ? imagePath.activeCheck : imagePath.inActiveCheck}
                            style={styles.clickIcon} />
                        <Text>By Logging in, you agree to NOOVVOO's Privacy Policy and terms of Use</Text>
                    </TouchableOpacity>

                    <ButtonComponent
                        btnText={'continue'}
                        onPress={() => navigation.navigate(navigationStrings.SET_PASSWORD)}
                        btnStyle={{ marginVertical: moderateVerticalScale(32) }} />
                </KeyboardAwareScrollView>

            </View>
        </SafeAreaView>
    );
};



//make this component available to the app
export default Register;
