//import liraries
import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import imagePath from '../../Constants/imagePath';
import ButtonComponent from '../../Components/ButtonComponent';
import navigationStrings from '../../Constants/navigationStrings';
import HomeStack from '../../Navigation/HomeStack';



// create a component
const Login = ({ navigation }) => {
    const [isVisible, setVisible] = useState(true)
    return (
        <View style={styles.container}>
            <View>
                <ImageBackground
                    source={{ uri: 'https://images.ctfassets.net/9wtva4vhlgxb/1MCz9x0Dg9iG6DJOqpqb1H/fb0cd8d03d20036a88cdcc28763264e1/Unique_baby_boy_names_720x432.jpg?fm=webp&q=70' }}
                    style={styles.imgStyle}>
                    <Text style={styles.loginTextStyle}>LOGIN</Text>
                </ImageBackground>

                <View style={styles.mainStyle}>
                    <TextInputWithLabel
                        label=" Email Address"
                        placeholder="Enter your email"
                        inputStyle={{ marginBottom: moderateVerticalScale(28) }}
                        keyboardType='email-address'
                    />

                    <TextInputWithLabel
                        label=" Password"
                        placeholder="Enter your password"
                        secureTextEntry={isVisible}
                        rightIcon={isVisible ? imagePath.hideEye : imagePath.showeye}
                        onPressRight={() => setVisible(!isVisible)}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.FORGOT_PASSWORD)}
                        activeOpacity={0.7}
                        style={styles.forgetView}>
                        <Text style={styles.forgetText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <ButtonComponent
                        btnText={"login"} 
                        onPress={()=> navigation.navigate(navigationStrings.TAB_ROUTES)}/>


                </View>
            </View>
            <View style={styles.bottomView} >
                <Text>Not a member?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.CHOOSE_ACCOUNT)}
                    style={styles.joinView}>
                    <Text style={styles.joinText}>Join Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};



//make this component available to the app
export default Login;
