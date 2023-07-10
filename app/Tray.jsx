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
                    <Text style={styles.buttonText}>🎲 Shuffle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
                    <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonList: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#ed714d',
        paddingHorizontal: 30,
        paddingVertical: 10, 
        borderRadius: 30,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: "#f79477"
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800
    },
    resetButton: {
        backgroundColor: '#f4f5f6',
    },
    resetButtonText: {
        color: '#777',
    },
    tray: {
        width: '100%',
        backgroundColor: '#e9eeff',
        height: 120,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            height: 0,
            width: -10,
        },
        shadowOpacity: 0.09,
        shadowRadius: 12.51,
        elevation: 15,
    },
})