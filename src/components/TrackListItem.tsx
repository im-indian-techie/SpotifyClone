import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Track } from "../types";
import { usePlayerContext } from "../providers/PlayerProvider";

export default function TrackListItem({ track }: { track: Track }) {
    const { setTrack } = usePlayerContext()
    return(
        <TouchableOpacity onPress={() => {
            setTrack(track);
        }}>
            <View style={styles.container}>
                <Image style={styles.Image} source={{ uri: track.album.images[0]?.url }} />
                <View>
                    <Text style={styles.title}>{track.name}</Text>
                    <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
                </View>
            </View>
    </TouchableOpacity>
    )
   


}
const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 500,
        fontSize: 15
    },
    subtitle: {
        color: 'grey'
    },
    Image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 10
    }
});