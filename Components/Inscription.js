// Components/Search.js

import React from 'react'
//import tem from './FilmItem'
//import films from '../Helpers/filmsData'
import { StyleSheet,Image, View, TextInput, Button, Text, StatusBar, TouchableOpacity } from 'react-native'
import { inscriptionAPI } from '../API/api'
class Inscription extends React.Component {
  
  constructor(props) {
    super(props)
    this.name=""
    this.phone=""
    this.password=""
    this.confirPassword=""
  }
  _nameTextChanged(text) {
    this.name=text
  }
  _phoneTextChange(text){
    this.phone=text
  }
  _passwordChanged(text){
    this.password=text
  }
  _confirPasswordChanged(text){
    this.confirPassword=text
  }
   
  _inscription(){
    if(this.phone.length > 0){
      const valeurs= {
        "name": this.name,
        "phone": this.phone,
        "password": this.password,
        "confirmPassword": this.confirPassword,
        "id": this.phone
      }
      console.log("passage = "+JSON.stringify(valeurs));
      inscriptionAPI(valeurs)
      .then((response) => console.log("totoototototo"))
      .catch((error) => console.error(error));
    }
  }

  _pageConnexion = () => {
    this.props.navigation.navigate("Acceuil")
  };

  render() {

    //const pageInscription= this.props.pageInscription
     
    return (
      <View style={styles.main_container}>
        
         <View style={styles.conteneurTitre}>
           <Text style={styles.titre}>APP Name</Text>
         </View>
       <View style={styles.separateur_2}/>
       <Image style={styles.image} source={require('../starWar.jpg')}/>
       <View style={styles.separateur_4}/>
         <View style={styles.formulaire}>
          
            <TextInput style={styles.champFormulaire} 
             placeholder='Nom'
             onChangeText={(text) => this._nameTextChanged(text)}/>
          
          <View style={styles.separateur_Form}/>
          
            <TextInput style={styles.champFormulaire} 
            placeholder='Téléphone'
            onChangeText={(text) => this._phoneTextChange(text)}/>
          
          <View style={styles.separateur_Form}/>
           <TextInput style={styles.champFormulaire} 
           placeholder='Mot de passe'
           onChangeText={(text) => this._passwordChanged(text)}/>
           <View style={styles.separateur_Form}/>
           <TextInput style={styles.champFormulaire} 
           placeholder='Confirmez mot de passe'
           onChangeText={(text) => this._confirPasswordChanged(text)}/>
         </View>
         <View style={styles.separateur_3}/>
         <View style={styles.connexion}>
              <Button color='green' title='Connexion' onPress={() => this._inscription()}/>
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
     flex:0.001
  },
  separateur_1:{
     flex:0.7
  },
  separateur_Form:{
    height:10
  },
  separateur_3:{
    flex:1.5
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
     //paddingTop:1,
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
     //paddingTop:50,
     
  },
  conteneurTitre: {
    flex:1
  },
  image : {
     width:100,
     flex:1.4,
  },
  formulaire:{
    flex: 0.8,
    
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
    borderWidth:2,
    //marginTop:15
  },
  connexion: {
    //width:150, ligne à problème
    
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
  flex:0.6,
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

export default Inscription
