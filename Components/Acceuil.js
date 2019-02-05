// Components/Search.js

import React from 'react'
import { StyleSheet,Image, View, TextInput, Button, Text, StatusBar, TouchableOpacity } from 'react-native'

class Acceuil extends React.Component {
  

  constructor(props) {
    super(props)
    this.id=""  
    this.password=""
    }
  _idTextChanged(text) {
    this.id=text
  }
  _passwordChanged(text){
    this.password=text
  }
  _connexion(){
    const valeurs= {
      "id": this.id,
      "password": this.password
    }
  }
  _pageInscription = () => {
    this.props.navigation.navigate("Inscription")
  };


  render() {
    
    return (
      <View style={styles.main_container}>
      <View style={styles.separateur_1}/>
       <View style={styles.conteneurTitre}>
          <Text style={styles.titre}>APP Name</Text>
       </View>
       <View style={styles.separateur_2}/>
       <Image style={styles.image} source={require('../starWar.jpg')}/>
       
                
         <View style={styles.formulaire}>
           <TextInput style={styles.champFormulaire} placeholder='Nom'/>
           <TextInput style={styles.champFormulaire} placeholder='Mot de passe'/>
         </View>
         <View style={styles.separateur_3}/>
         <View style={styles.connexion}>
              <Button color='green' title='Connexion' onPress={() => {}}/>
              <View style={styles.ligne}>
                 <View style={styles.hairline} />
                 <Text style={styles.loginButtonBelowText1}>OR</Text>
                 <View style={styles.hairline} />
              </View>
         </View>
         <View style={styles.separateur_4}/>
         <View style={styles.logoInscription}>
            <Image style={styles.ReseauxSociaux} source={require('../Images/facebook.png')}/>
            <Image style={styles.ReseauxSociaux} source={require('../Images/instagramm.jpeg')}/>
            <Image style={styles.ReseauxSociaux} source={require('../Images/twiterLogo.jpeg')}/>     
          </View>
          <View style={styles.lienConnexion}>
              <Text style={styles.lien}>
                  Vous n'avez pas de compte ? 
              </Text>
              <TouchableOpacity style={styles.lienC} onPress={()=>this._pageInscription()}>
                <Text style={styles.lienC}> 
                    Inscrivez vous ici
                  </Text> 
              </TouchableOpacity>
          </View>
        
      </View> 
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,  
    alignItems:'center'
  },
  separateur_2:{
     flex:0.1
  },
  separateur_1:{
     flex:0.7
  },
  separateur_3:{
    flex:0.3
  },
  separateur_4:{
    flex:0.2
  },
  hairline: {
    backgroundColor: 'black',
    height: 2,
    width: 100
  },
  ligne: {
     flexDirection:'row',
     paddingTop:1,
     flex:1,
     alignItems:'center',
     
  },
  
  loginButtonBelowText1: {
    
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: 'black'
  },
  
  conteneurTexteLogo: {
     flex:1,
     paddingTop:50,
     
  },
  conteneurTitre: {
    flex:1
  },
  image : {
     width:100,
     flex:1.5,
  },
  formulaire:{
    flex: 1,
    paddingTop:23
  },
  titre:{
    flex: 1,
    //marginTop: 55,
    fontSize:35, 
    color:'green',
    textAlign:'center',
    fontWeight:'bold'
  },
  champFormulaire:{
    width:280,
    borderColor:'green',
    borderWidth:1,
    marginTop:15
  },
  connexion: {
    //width:150, ligne à problème
    marginTop:15,
    flex:1
  },
  logoInscription:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  ReseauxSociaux : {
    width:3,
    height:45,
    paddingHorizontal:25
 },
 lienConnexion:{
  flex:1,
  height:50,
  // marginTop:15
 },
 lien:{
  textAlign:'center'   
 },
 lienC:{
  textAlign:'center',
  color:'green'   
 },
 statusbar:{
  height:StatusBar.currentHeight,
  backgroundColor:'red'
 }
})

export default Acceuil
