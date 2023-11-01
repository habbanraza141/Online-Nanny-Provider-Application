import {StyleSheet} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(24),

        // paddingVertical: moderateVerticalScale(15)

    },

    headingText: {
        fontSize:scale(24),
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    imgStyle: {
        width: moderateScale(140),
        height: moderateVerticalScale(140)
    },

    textStyle: {
        fontSize: moderateScale(20),
        fontWeight: '400',
        marginTop: moderateVerticalScale(16),
        textAlign: 'center'

    },

    clickIcon: {
        height: moderateScale(20), 
        width: moderateScale(20), 
        marginRight: moderateScale(12),
    }


});

export default styles;