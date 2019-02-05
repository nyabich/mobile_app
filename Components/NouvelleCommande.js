import React from 'react'
import { StyleSheet,Image, View, TextInput, Button, Text, StatusBar, TouchableOpacity } from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class NouvelleCommande extends React.Component {
    
    render() {
    
        return (
            <View style={styles.main_container}>
                <Text style={styles.titre}>Nouvelle commande</Text>
                <View style={styles.commande}>  
                   <TextInput style={styles.champFormulaire}  placeholder='Nom du podruit'/>
                   <Button color='green' title='Ajouter' onPress={() => {}}/>
                </View> 
                <View style={styles.listeCommande} >
                    <View style={styles.listeCommande_1}>
                       <Image style={styles.panier} source={require('../Images/panier.png')}/>
                       <View style={styles.liste}/>    
                    </View>
                    <Text style={styles.montant}>Montant :</Text>  
                </View>
                <Button  color='green' title='Valider la commande' onPress={() => {}}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      width: '100%',
      alignItems: 'center'
    },
    titre:{
        
        //marginTop: 55,
        fontSize:30, 
        color:'green',
        textAlign:'center',
        fontWeight:'bold',
        marginTop: '10%',
        marginBottom: window.height - 0.97*window.height
      },
      montant: {
        fontSize:30, 
        color:'green',
        fontWeight:'bold',
        textAlign:'center',
        marginTop: '10%',
      },
      champFormulaire:{
        width:200,
        height: 40,
        fontSize: 23,
        borderColor:'green',
        borderWidth:2,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderTopWidth:0,
        textAlign: 'center',
        marginRight: '2%'
      },
      commande: {
          flexDirection: 'row',
          marginTop: 11
      },
      listeCommande:{
        backgroundColor: 'rgb(239, 239, 239)',
              height: '56%',
              borderColor:'green',
        borderWidth:2, 
        marginTop: '10%',
        marginBottom:   '5%',
      },
      panier:{
          width: '30%',
          marginRight: '3%',
          resizeMode: 'contain',  
      },
      liste: {
          width: window.width - 0.50*window.width,
          borderColor: 'green',
          borderWidth:2,
          borderRadius:9,
          marginTop: '3%',
          marginBottom: '3%',
          backgroundColor: 'white',
          width: '66%'
          
      },
      listeCommande_1: {
        flexDirection:'row',
        marginRight: '2%',
        marginLeft: '2%',
        height:  '84%'
      },
    
  })

export default NouvelleCommande