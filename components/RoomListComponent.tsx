import { Card, Button } from '@ui-kitten/components';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RoomListComponent = () => {

    const rooms = [
        {
            name: 'Standard',
            price: 100,
            available: 10,
            description: 'Une chambre standard, parfaite pour les petits budgets et les radins',
            img: 'https://picsum.photos/200/300'
        },
        {
            name: 'Luxe',
            price: 200,
            available: 5,
            description: 'Une chambre de luxe parfaite pour les gens qui veulent faire les riches alors que toute lannée ils mangent des pâtes',
            img: 'https://picsum.photos/200/300'
        }, 
        {
            name: 'Suite',
            price: 300,
            available: 0,
            description: 'Une suite parfaite pour les gens qui ont trop dargent et qui veulent se la péter',
            img: 'https://picsum.photos/200/300'
        }
    ];

    return (
        <View style={styles.container}>
            {rooms.map((room, index) => (
                <Card style={styles.card} key={index}>
                    <Text style={styles.title}>{room.name} <Text style={styles.price}>{room.price}€/pers</Text></Text>
                    <Image 
                        source={{ uri: room.img }}
                        style={styles.image}
                    />
                    <Text style={styles.description}>{room.description}</Text>
                    {room.available > 0 ? (
                        <Button style={styles.button} status='success'>Reserver</Button>
                    ) : (
                        <Button style={styles.button} status='danger'>Indisponible</Button>
                    )}
                </Card>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        margin: 10,
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    price : {
        textAlign: 'center',
        fontSize: 10,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        marginTop: 10,
    }
});


export default RoomListComponent;
