import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tracks } from '../data/tracks'
import TrackListItem from '../components/TrackListItem'
import Player from './Player'

const Home = () => {
 
  return (
    <View style={styles.container}>
        <FlatList data={tracks} renderItem={({item})=><TrackListItem track={item}/>} ListHeaderComponent={()=><Player/>}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})