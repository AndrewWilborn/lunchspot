import { View, Image, Text, StyleSheet } from "react-native"

export default function RestCard({restaurant}) {
    
    return (
        <View style={styles.card}>
            <Image style={styles.image} src={restaurant.photo_url} />
            <Text style={styles.title}>{restaurant.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 100,
        borderRadius: 12
    },
    card: {
        margin: 8,
        padding: 8,
        borderRadius: 12,
        backgroundColor: "#cde",

    },
    title: {
        color: "#234",
        fontSize: 24,
        textAlign: "center",
    }
})