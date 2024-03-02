import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';

const MusicDetail=(props)=>{
    const {Music,image} = props.MusicData;
    return(
        <View style={styles.box}> 
            <Image 
            source={{ uri:image}}
            style={styles.albumpic}
            />
            <View style={styles.albumInfo}>
            <Text style={styles.albumtitle}>{Music}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    box:{
        alignItems:'center',
        width:220
    },
    albumpic:{
      width:200,
      height:200,
      marginBottom:10,
      borderRadius:10,
    },
    albumtitle:{
        fontSize:15,
    },
    albumInfo:{
        alignItems: 'center',
    }

  });

  export default MusicDetail;