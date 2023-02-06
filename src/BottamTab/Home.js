import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    TouchableHighlight
}from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                  <Text style={styles.text}>Home</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    }
})