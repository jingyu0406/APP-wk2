import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Header from "./src/components/Header";
import List from "./src/components/List";
import Album from "./src/components/Album";
import Single from "./src/components/Single";
import Foot from "./src/components/Foot";



const APP=()=>{
  return(
    <SafeAreaView>
      <StatusBar/>

      <Header/>
      <ScrollView style={styles.scroll}>

        <Album/>
        <Single/>
        <List/>
        <Foot/>


      </ScrollView>


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    scroll:{
      height:"dynamicHeight"

    },
  });




export default APP;