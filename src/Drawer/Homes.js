import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
}from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={styles.Container}>
               <Text style={styles.Text}>this is home page</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:"center",
        alignItems:"center"

    },
    Text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
        }
})