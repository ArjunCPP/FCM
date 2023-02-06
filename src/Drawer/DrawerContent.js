import React,{Component}from "react";
import{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native'
import { TouchableHighlight } from "react-native-gesture-handler";

export default class Drowercostom extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.profileIcon}>
                        <Image style={styles.Image}
                         source={require('../Drawer/logo.png')}></Image>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#000",marginLeft:5}}>Arun</Text>
                    <Text style={{color:"#000",marginLeft:5}}>ID: 1234</Text>
                    </View>
                </View>
                <View
                      style={{
                     marginTop:10,
                     borderBottomColor:'#000',
                     borderBottomWidth: 1
                     }}
                   />  
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:15,color:'#000',marginLeft:40,flexDirection:"row",marginTop:40}}
                onPress={()=>this.props.navigation.navigate('Homes')}>Orders</Text>
                </View>
                <TouchableHighlight style={styles.TouchableHighlight}>
                    <Text style={{color:"#000"}}>Enquire now</Text>
                </TouchableHighlight>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    Text:{
        fontSize:15,
        marginTop:10,
        marginLeft:10,
        color:'#000',
        marginLeft:30
    },
    profileIcon:{
        width:100,
        height:100,
        marginTop:19,
        marginLeft:10,
        borderRadius:50,
    },
    view:{
        width:'100%',
        height:"25%",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    info:{
        marginLeft:15,
        marginTop:10
        },
    Image:{
        width:100,
        height:100
    },
    round:{
        display:'flex',
        flexDirection:'row',
        marginBottom:10,
        width:25,
        height:25,
        marginTop:15,
        marginLeft:30,
        borderRadius:5
    },
    TouchableHighlight:{
        width:"80%",
        height:40,
        borderColor:"#000",
        borderWidth:1,
        borderRadius:5,
        marginTop:25,
        marginLeft:25,
        alignItems:"center",
        justifyContent:"center"
    }
})