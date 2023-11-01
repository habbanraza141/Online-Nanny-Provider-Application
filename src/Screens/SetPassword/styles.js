import {StyleSheet} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),

    },

    headingText: {
        fontSize:scale(24),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: moderateScale(54)

    },

    descText: {
        fontSize: scale(14),
        textAlign: 'center',
        fontWeight: '400',
        marginTop: moderateScale(12)
    },

    numbText: {
        textAlign: 'center',
        fontWeight: 'bold',

    },

    btnStyle: {
        height: moderateScale(56), 
        width: moderateScale(56), 
        borderRadius: moderateScale(28),
        alignSelf: 'flex-end'
    }


});

export default styles;