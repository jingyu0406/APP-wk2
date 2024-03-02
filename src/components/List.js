import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import ListDetail from "./ListDetail";
import Data from "../json/Data.json"

const List=()=>{
    return(
        <View>
            <View style={styles.header}>
            <Text style={styles.headerStyle}>TOP5</Text>
            </View>
            <ScrollView>
                <ListDetail Data={Data[0]}/>
                <ListDetail Data={Data[1]}/>
                <ListDetail Data={Data[2]}/>
                <ListDetail Data={Data[3]}/>
                <ListDetail Data={Data[4]}/>
            </ScrollView>
        </View>


    );
}
const styles = StyleSheet.create({
    header:{
      //backgroundColor:"#fff8dc",
      justifyContent:"center",
      height:60,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      elevation: 10, // 添加 elevation 屬性
    },
    headerStyle:{
      fontSize:23,
      color:"#66cdaa"
    }
  });
  
  export default List;
