import { Card, Button } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import api from '../services/Api';


interface RoomData {
    name: string;
    price: number;
    available: number;
    details: {
        active: number;
        category_id: number;
        created_at: string;
        id: number;
        lang_id: number;
        name: string;
        price: string;
        rate: string;
        recurrence: string;
        updated_at: string;
        img: string;
    };
}

const RoomListComponent = ({ setStep, setDataRoom }: {
    setStep: React.Dispatch<React.SetStateAction<"liste" | "recapitulatif" | "paiement">>;
    setDataRoom: React.Dispatch<React.SetStateAction<RoomData>>;
}) => {

    const { getAvailable } = api();

    const handleReservation = (selectedRoom: RoomData) => {
        setStep("recapitulatif");
        setDataRoom(selectedRoom);
    };

    const [available, setAvailable] = useState<RoomData[]>([]);

    useEffect(() => {
        const startDate = "2023-10-03 11:21:19"; // Replace this with your desired start date
        const endDate = "2023-11-06 11:21:19"; // Replace this with your desired end date

        getAvailable(startDate, endDate).then((res: Record<string, RoomData>) => {
            const availableArray = Object.values(res); // Corrected line
            setAvailable(availableArray);
        });

    }, []);


    return (
        <View style={styles.container}>
            {available.map((data, index) => (
                <Card style={styles.card} key={index}>
                    <Text style={styles.title}>{data.details.name} <Text style={styles.price}>{data.details.price}€/pers</Text></Text>
                    <Image
                        source={{ uri: data.details.img }}
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
    price: {
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
