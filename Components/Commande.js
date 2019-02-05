import React from 'react'
import CommandeUnitaire from './CommandeUnitaire'
import { StyleSheet,Image, FlatList, View, TextInput, Button, Text, StatusBar, TouchableOpacity } from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class Commande extends React.Component {
    render() {
            
        return (
            <View style={styles.main_container}>
                <Text style={styles.titre}>Commandes en cours</Text>
                <FlatList style={styles.flatlist}
                    data={[{id:3333}, {id:33333} , {id:333334} ]}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CommandeUnitaire/>}
                />
                <View style={styles.menuBas}>
                     <View style={styles.conteneursImage}>
                        <Image style={styles.image} source={require('../PageRechercher.png')}/>
                     </View>
                     <View style={styles.conteneursImage}>
                        <Image style={styles.image} source={require('../commandeTraitees.png')}/>
                     </View>
                     <View style={styles.conteneursImage}>
                        <Image style={styles.image} source={require('../commandEnCours.png')}/>
                     </View>
                     <View style={styles.conteneursImage}>
                         <Image style={styles.image} source={require('../profile.png')}/>
                     </View>
                     
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,  
        alignItems:'center',
        backgroundColor: 'rgb(239, 239, 239)'
      },
      titre:{
        
        //marginTop: 55,
        fontSize:30, 
        color:'green',
        textAlign:'center',
        fontWeight:'bold',
        marginTop: window.height - 0.93*window.height,
        marginBottom: window.height - 0.97*window.height
      },
      menuBas : {
          flexDirection: 'row'
      },
      image : {
        width:40,
        height: 45,
        flex: 1,
        resizeMode: 'contain'
     },
     conteneursImage : {
         flex : 1,
         height:70,
         flexDirection:'row',
         justifyContent: 'center'
     }
     
  })

export default Commande