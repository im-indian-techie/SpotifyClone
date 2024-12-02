import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackListItem from '../components/TrackListItem'
import { tracks } from '../data/tracks'

const Favourites = () => {
    return (
        <View style={styles.container}>
            <FlatList data={tracks} renderItem={({item})=><TrackListItem track={item}/>}/>
        </View>
      )
}

export default Favourites

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})