import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import MusicDetail from "./MusicDetail";
import AlbumData from "../json/AlbumData.json"

const Album=()=>{
    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.headerStyle}>ALBUMS</Text>
            </View>
            <ScrollView horizontal={true}>

                <View style={styles.album}>
                    <MusicDetail MusicData={AlbumData[0]}/>
                    <View style={styles.line} />
                    <MusicDetail MusicData={AlbumData[1]}/>
                    <View style={styles.line} />
                    <MusicDetail MusicData={AlbumData[2]}/>
                </View> 

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
      },
    album:{
        height:290,
        flexDirection: 'row',
        justifyContent:'center',
        padding:30,
    },
    line: {
        alignContent:'center',
        width: 1, // 直線的寬度
        height: 200, // 直線的高度
        backgroundColor: "#8fbc8f", // 直線的顏色
        marginLeft:30,
        marginRight:30
    },
});

  export default Album;
