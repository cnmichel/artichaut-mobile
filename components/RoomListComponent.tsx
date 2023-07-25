import { Card, Button } from '@ui-kitten/components';
import React,{useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import api from '../services/Api';
  

const RoomListComponent = ({setStep, setDataRoom}: {
                                                    setStep: React.Dispatch<React.SetStateAction<"liste" | "recapitulatif" | "paiement">>;
                                                    setDataRoom: any;
                                                })  => {

    const { getProductsByCategory, getAvailable } = api();                                              

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


    const handleReservation = (selectedRoom: {
        name: string;
        price: number;
        available: number;
        description: string;
        img: string;
    }) => {
        setStep("recapitulatif");
        setDataRoom(selectedRoom); // Remove the square brackets [] around selectedRoom
        console.log(selectedRoom);
    };

    const [available, setAvailable] = useState([]);

    useEffect(() => {
        getAvailable("2023-07-03 11:21:19", "2023-07-06 11:21:19").then((res) => {const availableArray = Object.values(res);
            setAvailable(availableArray)});
    }, []);
    
    return (
        <View style={styles.container}>
            {rooms.map((data, index) => (
                <Card style={styles.card} key={index}>
                    <Text style={styles.title}>{data.name} <Text style={styles.price}>{data.price}€/pers</Text></Text>
 		            <Image 
                        source={{ uri: "https://picsum.photos/200/300" }}
                        style={styles.image}
                    />
                    {data.available > 0 ? (
                       <Button style={styles.button} status='success' onPress={() => handleReservation(data)}>Reserver</Button> 
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