import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button  } from '@ui-kitten/components';
import api from '../services/Api';

const CheckoutComponent = ({ setStep, getDataRoom }: { setStep: React.Dispatch<React.SetStateAction<"liste" | "recapitulatif" | "paiement">>, getDataRoom: any }) => {

    const { getProductsByCategory } = api();

    const handleBack = () => {
        setStep('liste');
    }

    const [checked, setChecked] = React.useState(false);

    const onCheckedChange = (isChecked): void => {
        setChecked(isChecked);
    };
    
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getProductsByCategory(2).then((res) => {
            const optionsArray = Object.values(res);
            setOptions(optionsArray);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Button style={styles.backButton} status='danger' onPress={handleBack}>Retour</Button>
            <Card>
                <Text>Options de séjour</Text>
                {options.map((data, index) => (
                    <Text key={index}>{data.name} {data.price}</Text>
                ))}
            </Card>
            <Card>
                <Text>Recapitulatif de votre réservation</Text>
                <Text>Chambre: {getDataRoom[0].details.name}</Text>
                <Text>Prix: {getDataRoom[0].details.price}</Text>
            </Card>
            <Button status='success'>Finaliser la réservation</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        justifyContent: 'flex-start',
    }
});

export default CheckoutComponent;
