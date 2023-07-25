import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button, Toggle } from '@ui-kitten/components';
import api from '../services/Api';

const CheckoutComponent = ({ setStep, getDataRoom }: { setStep: React.Dispatch<React.SetStateAction<"liste" | "recapitulatif" | "paiement">>, getDataRoom: any }) => {

    const { getProductsByCategory } = api();

    const handleBack = () => {
        setStep('liste');
    }

    const [formules, setFormules] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getProductsByCategory(2).then((res) => {
            const formulesArray = Object.values(res);
            setFormules(formulesArray);
        });

        getProductsByCategory(3).then((res) => {
            const optionsArray = Object.values(res);
            setOptions(optionsArray);
        })
    }, []);

    // Etats pour les formules et leurs prix sélectionnés
    const [checkedStatesFormules, setCheckedStatesFormules] = useState({});
    const [totalPriceFormules, setTotalPriceFormules] = useState(0);

    // Etats pour les options et leurs prix sélectionnés
    const [checkedStatesOptions, setCheckedStatesOptions] = useState({});
    const [totalPriceOptions, setTotalPriceOptions] = useState(0);

    const onFormuleCheckedChange = (index: number, isChecked: boolean, price: number): void => {
        setCheckedStatesFormules((prevState) => ({
            ...prevState,
            [index]: isChecked,
        }));

        setTotalPriceFormules((prevTotalPrice) => {
            if (isChecked) {
                return prevTotalPrice + Number(price);
            } else {
                return prevTotalPrice - Number(price);
            }
        });
    };

    const onOptionCheckedChange = (index: number, isChecked: boolean, price: number): void => {
        setCheckedStatesOptions((prevState) => ({
            ...prevState,
            [index]: isChecked,
        }));

        setTotalPriceOptions((prevTotalPrice) => {
            if (isChecked) {
                return prevTotalPrice + Number(price);
            } else {
                return prevTotalPrice - Number(price);
            }
        });
    };

    return (
        <View style={styles.container}>
            <Button style={styles.backButton} status='danger' onPress={handleBack}>Retour</Button>
            <Card>
                <Text style={styles.title}>Formule de séjour</Text>
                <View style={styles.gapSupplements}>
                    {formules.map((data, index) => (
                        <View style={styles.supplements} key={index}>
                            <Toggle
                                status='success'
                                checked={checkedStatesFormules[index] || false}
                                onChange={(isChecked) => onFormuleCheckedChange(index, isChecked, data.price)}
                            ></Toggle>
                            <Text>{data.name} {data.price}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.title}>Options</Text>
                <View style={styles.gapSupplements}>
                    {options.map((data,index) => (
                        <View style={styles.supplements} key={index}>
                            <Toggle
                                status='success'
                                checked={checkedStatesOptions[index] || false}
                                onChange={(isChecked) => onOptionCheckedChange(index, isChecked, data.price)}
                            ></Toggle>
                            <Text>{data.name} {data.price}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.title}>Recapitulatif de votre réservation</Text>
                <Text style={styles.totalHT}>Chambre {getDataRoom.name}</Text>
                <Text style={styles.totalHT}>Total HT chambre : {getDataRoom.price} €</Text>
                <Text style={styles.totalHT}>Total HT formules : {totalPriceFormules} €</Text>
                <Text style={styles.totalHT}>Total HT options : {totalPriceOptions} €</Text>
                <Text style={styles.totalTTC}>Total HTT : {(getDataRoom.price + totalPriceFormules + totalPriceOptions) * 1.25} €</Text>
                <Button style={styles.buttons} status='success'>Finaliser la réservation</Button>
            </Card>
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
        marginBottom: 12,
        marginTop: 12
    },

    buttons: {
        marginBottom: 12,
        marginTop: 12
    },

    title: {
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: 12,
        marginTop: 12
    },

    supplements: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 25
    },

    gapSupplements: {
        gap: 10
    },

    totalHT: {
        marginBottom: 8,
    },

    totalTTC: {
        fontWeight: "bold",
        fontSize: 20,
        textTransform: "uppercase"
    }
});

export default CheckoutComponent;
