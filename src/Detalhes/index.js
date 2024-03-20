import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes(props){
  return(
    <View style={styles.container}>
      <View style={styles.modalContainer}>

        <TouchableOpacity style={styles.btnSair} onPress={ props.voltar }>
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse: </Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer:{
    width: '100%',
    height: '60%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  btnSair:{
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titulo:{
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  sinopse:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 20,
  },
  descricao:{
    color: '#fff',
    marginLeft: 20,
    marginRight: 20,
  }
});