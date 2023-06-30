import React, {useRef, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Layout, Button, Divider } from '@ui-kitten/components';
import {styles} from './Styles/SignUp.style';
import {components} from "@eva-design/eva/mapping";
//import { register } from "@/services/auth.js";
import Auth from "../services/Auth";
import axios from "axios";

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [alertMail, setAlertMail] = useState(false);
    const [alertEmptyInput, setAlertEmptyInput] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [alertFailure, setAlertFailure] = useState(false);
    const formRef = useRef(null);

    const validateMail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            // Mauvaise syntaxe de l'e-mail
            setAlertMail(true);
            return false;
        }
        return true;
    }
    const validatePass = () => {
        //reset all message show
        setAlertMail(false);
        setAlertPassword(false);
        setAlertEmptyInput(false);
        setAlertSuccess(false);
        setAlertFailure(false)

        if(password == "" || passwordConfirm == "" || email == "")
        {
            setAlertEmptyInput(true);
        }
        else if(password != passwordConfirm){
            //mauvaise correspondance
            setAlertPassword(true);
            return false;
        }
        return true;
        // Validation logic for confirming password
        // Return true or false based on validation
    };

    const onSubmit = async () => {
        console.log(formRef.current);
        if(formRef.current) {
            setIsLoading(true);

            // Form validation
            try {
                // await formRef.current;

                if (validatePass()) {
                    const formData = formRef; // Récupération des données du formulaire
                    const user = {
                        email: formData.email,
                        password: formData.password,
                        password_confirmation: formData.passwordConfirm
                    };

                    try {
                        const data = [formData];
                        console.log(data);
                        if (data[0].status) {
                            setAlertSuccess(true);
                            // Handle successful registration
                        } else {
                            // Handle registration failure
                            setAlertFailure(true);
                            //console.log(data[0].errors.email[0]);
                        }
                    } catch (error) {
                        // Handle registration error
                        console.log(error);
                    }
                }
            }catch (error) {
                // Gérer les erreurs de validation du formulaire
                console.log(error);
            }
        }
        setIsLoading(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Inscription</Text>
            <Text style={styles.subtitle}>Veuillez saisir une adresse email valide et un mot de passe</Text>


            <Input
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Saisir une adresse mail"
            />

            {alertMail && <Text>Entrer un e-mail valide</Text>}

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
            {alertFailure && <Text>L'email est déja utilisé</Text>}
            {alertSuccess && <Text>Inscription réussie</Text>}
            {alertEmptyInput && <Text>Veuillez remplir tout les champs</Text>}
            {alertPassword && <Text>les mots de passe ne sont pas identiques</Text>}

            <Button style={styles.button} onPress={() => onSubmit(formRef)} disabled={isLoading}>
                Sign Up
            </Button>

            <Divider/>
        </View>
    );

};