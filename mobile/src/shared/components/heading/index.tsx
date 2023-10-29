import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export function Heading(props: {
  children: string,
}) {
  return (
    <Text style={styles.container}>
      {props.children}
    </Text>
  );
}