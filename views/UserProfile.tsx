import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import {Button,Datepicker, IndexPath, Input, Select, SelectItem, SelectProps} from '@ui-kitten/components';
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
    const [alertEmptyField, setAlertEmptyField] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [alertNewSuccess, setAlertNewSuccess] = useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));

    const [date, setDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const onSave = async () => {
        // Form validation
        try{

        } catch (error) {
            // Handle registration error
            console.log(error);
        }
    }
    const onSaveMdp = async () => {
        setNewPassword(false);
        setAlertEmptyField(false);

        if(password == "" || newPasswordConfirm == "" || newPasswordConfirm === "")
        {
            setAlertEmptyField(true);
            return;
        }

        const isCurrentPasswordValid = await checkCurrentPassword(currentPassword);

        if (!isCurrentPasswordValid) {
            // Afficher un message d'erreur si le mot de passe actuel est incorrect
            setAlertEmptyField(true);
            return;
        }
        else if(password != newPasswordConfirm){
            //does not equal
            setAlertEmptyField(true);
            return false;
        }
        return true;
    }
    const useSelectState = (initialState = undefined): SelectProps => {
        const [selectedIndex, setSelectedIndex] = React.useState(initialState);
        return { selectedIndex, onSelect: setSelectedIndex };
    };

    const genreSelectState = useSelectState();

    return (
    <View  style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}> Bienvenue  </Text>
            <Image style={styles.img} source={require('../assets/rang gold.png')}/>
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
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                    placeholder='Genre'
                    {...genreSelectState}
                    style={styles.select}
                >
                    <SelectItem title='Homme' />
                    <SelectItem title='Femme' />
                </Select>

                <Datepicker
                    style={styles.select}
                    placeholder='Date de naissance'
                    date={selectedDate}
                    onSelect={nextDate => setSelectedDate(nextDate)}
                    // Efface la sélection en définissant selectedDate à null lorsque le composant est effacé
                    onClear={() => setSelectedDate(null)}
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
                {alertNewSuccess && <Text>{alertNewSuccess}</Text>}
                {alertEmptyField && <Text>Veuillez remplir tout les champs</Text>}
                {newPassword && <Text>les mots de passe ne sont pas identiques</Text>}

                <Button style={styles.button} onPress={() => onSave()} >
                    Enregistrer
                </Button>
            </View>
        </View>
  )
}
/*                <Input
                    style={styles.input}
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    placeholder="Mot de passe actuel"
                    secureTextEntry
                />
*/