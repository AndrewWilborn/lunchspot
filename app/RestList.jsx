import { useState, useEffect } from "react"
import { ScrollView, Text, StyleSheet } from "react-native"
import RestCard from "./RestCard"

export default function RestList({ selectedRestaurant }) {
    const [restaurantList, setRestaurantList] = useState()

    useEffect(() => {
        fetch('https://api.bocacode.com/api/restaurants')
            .then(res => res.json())
            .then(setRestaurantList)
            .catch(alert)
    }, [])

    return (
        <>
            <ScrollView style={styles.scrollingList}>
                {!restaurantList
                    ? <Text style={styles.loadingText}>Loading...</Text>
                    : (selectedRestaurant)
                        ? <RestCard restaurant={restaurantList[Math.floor(selectedRestaurant * restaurantList.length)]} />
                        :restaurantList.map(restaurant => (
                        <RestCard key={restaurant._id} restaurant={restaurant}/>
                        ))
                }
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    loadingText: {
        padding: 8,
        fontSize: 24,
        color: '#eee',
        textAlign: 'center'
    },
    scrollingList :{
        // borderColor: 'red',
        // borderWidth: 2,
        // borderStyle: 'solid',
        width: '90%',
        marginTop: 16
    }
})