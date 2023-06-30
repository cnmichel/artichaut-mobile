import React, { useEffect, useState } from 'react';
import { Text } from '@ui-kitten/components';
import {View, Image, StyleSheet} from 'react-native';

interface Props {

}

export const Home: React.FC<Props> = (props: Props) => {

  const {  } = props;

  return (
    <>
       <Image
        source={{
          uri: 'https://media.tenor.com/QgTx6fv4IpAAAAAM/el-risitas-juan-joya-borja.gif',
        }}
      />
    </>
  )
}