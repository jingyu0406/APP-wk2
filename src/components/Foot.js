import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';

const Foot=()=>{
    return(
        <View style={styles.footer}>
        <Text style={styles.footerStyle}>https://amatsuki.jp/</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    footer:{
      //backgroundColor:"#fff8dc",
      justifyContent:"center",
      alignItems:"center",
      height:50,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
    },
    footerStyle:{
        color:"#778899",
        fontSize:12
    },
  });

  export default Foot;