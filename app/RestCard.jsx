import { View, Image, Text, StyleSheet } from "react-native"

export default function RestCard({restaurant}) {
    
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: restaurant.photo_url, cache: 'force-cache'}} />
            <Text style={styles.title}>{restaurant.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 128,
        borderRadius: 6,
        borderWidth: 3,
        borderColor: '#cccccc',
        borderStyle: 'solid',
    },
    card: {
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginBottom: 12,
        // shadowColor: "#000",
        // shadowOffset: {
	    //     width: 0,
	    //     height: 7,
        // },
        // shadowOpacity: 0.07,
        // shadowRadius: 0.51,
        // elevation: 15,
    },
    title: {
        color: '#234',
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 12,
    }
})