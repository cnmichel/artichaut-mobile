import React, { useState } from 'react';
import { View, Text, Image, Alert, StyleSheet } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import Auth from '../services/Auth';
import Store from '../services/Store';
import {useNavigation} from "@react-navigation/native";

const { saveItem } = Store();
const { register } = Auth();

export const SignUp = ({ navigation, route }: { navigation: any })  => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [alertMail, setAlertMail] = useState(false);
    const [alertEmptyInput, setAlertEmptyInput] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    let messageStatus = '';

    const validatePass = () => {
        // Reset all message flags
        setAlertMail(false);
        setAlertPassword(false);
        setAlertEmptyInput(false);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setAlertMail(true);
            return false;
        } else if (password === '' || passwordConfirm === '' || email === '') {
            setAlertEmptyInput(true);
            return false;
        } else if (password !== passwordConfirm) {
            setAlertPassword(true);
            return false;
        }

        return true;
    };

    const onSubmit = async () => {
        // Form validation
        try {
            if (validatePass()) {
                const user = {
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirm,
                };
                const dataRegister = await register(user);
                try {
                    if (dataRegister.status) {
                        messageStatus = dataRegister.message;
                        setAlertSuccess(true);
                        await saveItem('token', dataRegister.token);
                        route.params.redirectToHome(true);
                        // Handle successful registration
                    } else {
                        messageStatus = dataRegister.message;
                        setAlertSuccess(true);
                    }
                } catch (error) {
                    // Handle registration error
                    console.log(error);
                }
            }
        } catch (error) {
            // Handle form errors
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/icon/logo.png')} />
                <Text style={styles.title}>Inscription</Text>
                <Text style={styles.subtitle}>Veuillez saisir une adresse email valide et un mot de passe</Text>
            </View>
            <View style={styles.form}>
                {alertMail && (
                    <Text style={styles.errorText}>Veuillez entrer un email valide</Text>
                )}
                {alertEmptyInput && (
                    <Text style={styles.errorText}>Veuillez remplir tout les champs</Text>
                )}
                {alertPassword && (
                    <Text style={styles.errorText}>Les mots de passe ne sont pas identiques</Text>
                )}
                <Input
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Saisir une adresse mail"
                />

                <Input
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Saisir le mot de passe"
                    secureTextEntry
                />

                <Input
                    style={styles.input}
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    placeholder="Confirmer le mot de passe"
                    secureTextEntry
                />

                {alertSuccess && <Text>{alertSuccess}</Text>}

                <Button style={styles.button} onPress={onSubmit}>
                    Sign Up
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 5,
        color: '#888',
        textAlign: 'center',
    },
    form: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#00B561',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        width: 280,
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default SignUp;