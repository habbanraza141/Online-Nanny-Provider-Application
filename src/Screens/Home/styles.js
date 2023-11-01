import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerText:{
        textTransform:'uppercase',
        fontSize:scale(18),
        fontWeight:'bold',
        color: colors.themeColor
    },

    headerStyle: {
        backgroundColor:colors.white,
        paddingVertical: moderateVerticalScale(16),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:moderateScale(16)        
    },

    
    flatStyle:{
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        padding:moderateScale(16),
        borderRadius:moderateScale(4),
        margin:2
    },
    flexView: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent:'space-between'
    }
    

});

export default styles
