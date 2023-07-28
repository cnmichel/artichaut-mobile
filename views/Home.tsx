import React, { useEffect, useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { Search, SearchQuery } from '../components/Search';
import { styles } from '../Styles/Home.style';
import Api from "../services/Api";

interface Hero {
  title: string,
  subtitle: string,
}

// @ts-ignore
export const Home = ({ route, navigation }) => {

  const { getHero } = Api();

  const [hero, setHero] = useState<Hero>({title: '', subtitle: ''});

  const handleSearch = (query: SearchQuery) => {
    navigation.navigate('Réservations', {
      query: query
    })
  }

  useEffect(() => {
    getHero(1).then((data) => setHero(data))
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgrounds/login-background.jpeg')} resizeMode="cover" style={styles.image}>
        <View style={styles.cover}>
          <Search mode="compact" onSearch={(query) => handleSearch(query)} />
          <View style={styles.subContainer}>
            <Text category="h1" style={styles.title}>{ hero.title }</Text>
            <Text category="h3" style={styles.subtitle}>{ hero.subtitle }</Text>
            <Button
              style={styles.button}
              appearance="outline"
              status="control"
              size="giant"
              onPress={() => null}
            >En Savoir Plus</Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}