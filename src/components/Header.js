import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';

const Header=()=>{
    return(
        <View style={styles.header}>
        <Text style={styles.headerStyle}>-AMATSUKI-</Text>
      </View>
    );
}


const styles = StyleSheet.create({
    header:{
      //backgroundColor:"#fff8dc",
      justifyContent:"center",
      alignItems:"center",
      height:50,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      elevation: 10, // 添加 elevation 屬性
    },
    headerStyle:{
      fontSize:15,
      color:"#66cdaa"
    },
  });

  export default Header;