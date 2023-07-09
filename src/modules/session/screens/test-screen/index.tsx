import { COLORS } from '@shared/theme';
import React, {useState} from 'react';
import {Alert, TouchableHighlight, StyleSheet, Text, Pressable, View} from 'react-native';
import { Flyout } from "react-native-windows";
import { aditionalStyles, Description } from './styles';


export const TextScreen = () => {
  const [showFlyout1, setShowFlyout1] = useState(false);
  return (
    <View style={styles.centeredView}>
      <TouchableHighlight
        onPress={() => {
          setShowFlyout1(true);
        }}
        activeOpacity={0.2}
        underlayColor={COLORS.grey_480}>
        <Text>Open Popup</Text>
      </TouchableHighlight>
      <Flyout
        isOpen={showFlyout1}
        onDismiss={() => {
          setShowFlyout1(false);
        }}
        placement="full">
        <View style={aditionalStyles.modal}>
          <Text style={aditionalStyles.title}>This is a flyout.</Text>
          <Text style={aditionalStyles.description}>Algumas informações do aplicativo não foram recuperadas com sucesso e isso é prejudicial ao funcionamente adequado do app, sendo assim você deve ser deslogar e logar novamente, todas as metricas de erros são notificadas, como você pode ver aqui, nesse caso se precisar esclarecer ou resolver algo entre em contato conosco 😁</Text>
          <TouchableHighlight
            onPress={() => {
              setShowFlyout1(false);
            }}
            activeOpacity={0.2}
            underlayColor={COLORS.green_900}>
              <Text>fechar</Text>
          </TouchableHighlight>
        </View>
      </Flyout>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setShowFlyout1(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
}); 