import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function Tray({setSelectedRestaurant}) {

    const choose = () => {
        const chosen = Math.random()
        setSelectedRestaurant(chosen)
    }

    const reset = () => {
        setSelectedRestaurant(null)
    }

    return (
        <View style={styles.tray}>
            <View style={styles.buttonList}>
                <TouchableOpacity style={styles.button} onPress={choose}>
                    <Text style={styles.buttonText}>Shuffle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonList: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: "space-evenly"
    },
    button: {
        backgroundColor: 'pink',
        paddingHorizontal: 24,
        paddingVertical: 8, 
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800
    },
    resetButton: {
        backgroundColor: 'grey',
    },
    tray: {
        width: '100%',
        height: 64,
        backgroundColor: '#cde',
        justifyContent: 'center',
        alignItems: 'center',
    },
})