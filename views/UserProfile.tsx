import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';
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
    const useSelectState = (initialState = undefined): SelectProps => {
        const [selectedIndex, setSelectedIndex] = React.useState(initialState);
        return { selectedIndex, onSelect: setSelectedIndex };
    };

    const genreSelectState = useSelectState();

    return (
    <View  style={styles.container}>
        <ImageBackground source={require('../assets/backgrounds/aqua.png')} resizeMode="cover" style={styles.Background}>
            <View style={styles.header}>
                <Text style={styles.title}> Bienvenue </Text>
                <Text style={styles.user}> Bobby singer  <Image style={styles.img} source={require('../assets/gold-logo.png')}/> </Text>    
            </View>
        </ImageBackground>
        <Text style={styles.infos}> Vos informations </Text>
            <View style={styles.form}>
                <View style={styles.editNames}>
                    <Input
                        style={styles.names}
                        value={firstname}
                        onChangeText={setFirstname}
                        placeholder="Nom"
                    />

                    {alertMail && <Text>Entrer un e-mail valide</Text>}

                    <Input
                        style={styles.names}
                        value={lastname}
                        onChangeText={setLastname}
                        placeholder="Prenom"
                    />
                </View>
               

                <View style={styles.editInfos}>
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
                </View>

                <View style={styles.other}>
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
            </View>

            <Text style={styles.infos}> Votre mot de passe </Text>
            <View style={styles.form}>
                <View style={styles.editNames}>
                    <Input
                            style={styles.names}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Mot de passe actuel"
                            secureTextEntry
                        />

                        <Input
                            style={styles.names}
                            value={newPassword}
                            onChangeText={setNewPassword}
                            placeholder="Nouveau mot de passe"
                            secureTextEntry
                        />

                    </View>
                    <View style={styles.other}>
                        <Input
                                style={styles.input}
                                value={newPasswordConfirm}
                                onChangeText={setNewPasswordConfirm}
                                placeholder="Confirmation mot de passe"
                                secureTextEntry
                            />
                    <Button style={styles.button} onPress={() => onSave()} >
                        Enregistrer
                    </Button>
                </View>
            </View>
               
        </View>
  )
}