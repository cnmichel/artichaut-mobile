import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import {Button,IndexPath, Input, Select, SelectItem,Layout} from '@ui-kitten/components';
import { styles } from '../Styles/UserProfile.style';

interface Props {

}

export const UserProfile: React.FC<Props> = (props: Props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [genre, setGenre] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [alertMail, setAlertMail] = useState(false);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
    const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));

    interface IndexPath {
        row: number;
        section?: number;
    }
    const onSave = async () => {
        // Form validation
        try{

        } catch (error) {
            // Handle registration error
            console.log(error);
        }
    }

  return (
    <View  style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}> Bienvenue <Image style={styles.img} source={require('../assets/rang gold.png')}/> </Text>
        </View>

            <View style={styles.form}>
                <Input
                    style={styles.input}
                    value={firstname}
                    onChangeText={setFirstname}
                    placeholder="Nom"
                />

                {alertMail && <Text>Entrer un e-mail valide</Text>}

                <Input
                    style={styles.input}
                    value={lastname}
                    onChangeText={setLastname}
                    placeholder="Prenom"
                />

                <Select
                    //selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                    style={styles.select}
                >
                    <SelectItem title='Homme' />
                    <SelectItem title='Femme' />
                </Select>

                <Input
                    style={styles.input}
                    value={birthday}
                    onChangeText={setBirthday}
                    placeholder=""
                />

                <Input
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                />

                <Button style={styles.button} onPress={() => onSave()} >
                    Enregistrer
                </Button>
            </View>
            <View style={styles.form}>
                <Input
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Mot de passe actuel"
                    secureTextEntry
                />

                <Input
                    style={styles.input}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="Nouveau mot de passe"
                    secureTextEntry
                />

                <Input
                    style={styles.input}
                    value={newPasswordConfirm}
                    onChangeText={setNewPasswordConfirm}
                    placeholder="Confirmation mot de passe"
                    secureTextEntry
                />
            </View>
        </View>
  )
}