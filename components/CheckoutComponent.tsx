import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button, Toggle } from '@ui-kitten/components';
import api from '../services/Api';

const CheckoutComponent = ({ setStep, getDataRoom }: { setStep: React.Dispatch<React.SetStateAction<"liste" | "recapitulatif" | "paiement">>, getDataRoom: any }) => {

    const { getProductsByCategory } = api();

    const handleBack = () => {
        setStep('liste');
    }

    const [options, setOptions] = useState([]);

    useEffect(() => {
        getProductsByCategory(2).then((res) => {
            const optionsArray = Object.values(res);
            setOptions(optionsArray);
        });
    }, []);

    const [checkedStates, setCheckedStates] = useState({});
    const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice as a number

    const onCheckedChange = (index: number, isChecked: boolean, price: number): void => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [index]: isChecked,
        }));

        setTotalPrice((prevTotalPrice) => {
            if (isChecked) {
                return prevTotalPrice + Number(price); // Convert price to number before addition
            } else {
                return prevTotalPrice - Number(price); // Convert price to number before subtraction
            }
        });
    };

    return (
        <View style={styles.container}>
            <Button style={styles.backButton} status='danger' onPress={handleBack}>Retour</Button>
            <Card>
                <Text>Options de séjour</Text>
                {options.map((data, index) => (
                    <View key={index}>
                        <Text>{data.name} {data.price}</Text>
                        <Toggle
                            checked={checkedStates[index] || false}
                            onChange={(isChecked) => onCheckedChange(index, isChecked, data.price)}
                        >
                            {`Checked: ${checkedStates[index] || false}`}
                        </Toggle>
                    </View>
                ))}
            </Card>
            <Card>
                <Text>Recapitulatif de votre réservation</Text>
                <Text>Chambre: {getDataRoom.name}</Text>
                <Text>Total HT: {getDataRoom.price + totalPrice} €</Text>
                <Text>Total HTT: {(getDataRoom.price + totalPrice)*1.25} €</Text>
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
