import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';

const ListDetail=(props)=>{
    const {song,artist,img,picture} = props.Data;
    return(
        <View>
            <View style={styles.info}> 
                <Image 
                source={{ uri:img}}
                style={styles.amatsuki}
                />
                <View >
                <Text style={styles.TextStyle}>{song}</Text>
                <Text style={styles.TextStyle2}>{artist}</Text>
                </View>
            </View>
            <View style={styles.pictureOut}>
                <Image
                source={{uri:picture}}
                style={styles.picture}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    amatsuki:{
      width:50,
      height:50,
      marginRight:7,
      borderRadius:5
    },
    info:{
      flexDirection:'row',
      borderWidth:1,
      borderRadius:2,
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
      borderColor:"#8fbc8f",
      margin:5,
      marginBottom:0,
      padding:10,
      alignItems:'center',
    },
    picture:{
      height:300,
      width:null,
      borderRadius:5
    },
    pictureOut:{
      borderWidth:1,
      borderRadius:2,
      borderTopLeftRadius:0,
      borderTopRightRadius:0,
      borderColor:"#8fbc8f",
      margin:5,
      marginTop:0,
      padding:5,
    },
    TextStyle:{
        color:"#3cb371",
        fontSize:17
    },
    TextStyle2:{
        color:"#778899",
        fontSize:12
    }
  });

  export default ListDetail;