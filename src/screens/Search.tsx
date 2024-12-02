import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TrackListItem from '../components/TrackListItem'
import { tracks } from '../data/tracks'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Search = () => {
    const [search, setSerach] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name='search' color={'white'} size={20} />
                <TextInput value={search} onChangeText={setSerach} placeholder='What do you want to listen to ?' style={styles.input} placeholderTextColor={'grey'} />
                <Text onPress={()=>{
                    setSerach('')
                }} style={styles.cancel}>Cancel</Text>
            </View>
            <FlatList data={tracks} renderItem={({ item }) => <TrackListItem track={item} />} />
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    cancel: {
        color: '#ffffff'
    },
    input: {
        backgroundColor: '#121314',
        flex: 1,
        padding: 8,
        marginHorizontal: 10,
        color: 'white'
    }
})