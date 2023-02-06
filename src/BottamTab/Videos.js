import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
}from 'react-native'

export default class Contact extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Videos</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#062e27'
    }
})