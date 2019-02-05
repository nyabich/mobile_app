import React from 'react'
import { StyleSheet,Image, View, TextInput, Button, Text, StatusBar, TouchableOpacity } from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class CommandeUnitaire extends React.Component {
    
    render() {
    
        return (
            <View style={styles.main_container}>
                <View style={styles.conteneurDate}>
                   <Text style={styles.date}>
                       Aujourd'hui
                   </Text>
                </View>
                <View style={styles.contenuCommande}>
                    
                </View>
                <View style={styles.separateur}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      width: window.width- window.width/12   
    },
    conteneurDate : {
        backgroundColor: 'green',
        flex: 0.125,
        borderWidth: 1
    },
    date: {
        color:'white',
        fontSize:15
    },
    contenuCommande:{
        height: 150,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center', 
    shadowOffset: {width: 0, height: 3}, 
    shadowOpacity: 0.9,
    shadowRadius: 6,
    shadowColor: 'grey',
    elevation: 7,
    },  
    separateur: {
        height: 20
    }
  })

export default CommandeUnitaire