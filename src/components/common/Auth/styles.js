import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    field:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    input:{
        flexGrow:1,
    },
    label:{
        color:'#000',
        width:100,
    },
    buttonContainer:{
        alignItems:'center',
        marginTop:20,
    },
    button:{
        width:200,
        borderColor:'#027691',
        borderWidth:2,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:18,
        color:'#027691',
    },
    signUpLink:{
        alignItems:'center',
        marginTop:10,
    },
});