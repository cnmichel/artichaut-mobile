import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Button} from '@ui-kitten/components';
import { styles } from '../Styles/SignUp.style';
import Auth  from '../services/Auth';
import Store from '../services/Store';

const {saveItem} = Store();
const {register} = Auth();

// @ts-ignore
export const SignUp = ({route }: { navigation: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [alertMail, setAlertMail] = useState(false);
    const [alertEmptyInput, setAlertEmptyInput] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    let messageStatus = "";

    const validatePass = () => {
        //reset all message show
        setAlertMail(false);
        setAlertPassword(false);
        setAlertEmptyInput(false);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setAlertMail(true);
        }
        else if(password == "" || passwordConfirm == "" || email == "")
        {
            setAlertEmptyInput(true);
        }
        else if(password != passwordConfirm){
            //does not equal
            setAlertPassword(true);
            return false;
        }
        return true;
        // Validation logic for confirming password
        // Return true or false based on validation
    };

    const onSubmit = async () => {
        // Form validation
                            route.params.redirectToHome(true);

    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> Inscription <Image style={styles.img} source={require('../assets/icon/logo.png')}/> </Text>
                <Text style={styles.subtitle}>Veuillez saisir une adresse email valide et un mot de passe</Text>
             </View>

            <View style={styles.form}>
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
            {alertSuccess && <Text>{alertSuccess}</Text>}
            {alertEmptyInput && <Text>Veuillez remplir tout les champs</Text>}
            {alertPassword && <Text>les mots de passe ne sont pas identiques</Text>}

            <Button style={styles.button} onPress={() => onSubmit()} >
                Sign Up
            </Button>
            </View>
        </View>
    );

};