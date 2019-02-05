// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import  Acceuil from '../Components/Acceuil'
import  Inscription from '../Components/Inscription'
import  Commande from '../Components/Commande' 
import CommandeUnitaire from '../Components/CommandeUnitaire'
import NouvelleCommande from '../Components/NouvelleCommande'
const AcceuilStackNavigator = createStackNavigator({
  Acceuil: { 
    screen: Acceuil,
    navigationOptions: {
      title: 'Connexion',
      header: null ///ligne ajoutée
    }
  },
  NouvelleCommande: {
     screen: NouvelleCommande,
     navigationOptions : {
       title: 'NouvelleCommande',
       header: null
    }
  },
  Commande: {
    screen: Commande,
    navigationOptions : {
    title: 'Commandes',
    header: null
  }
},
  CommandeUnitaire : {
    screen: CommandeUnitaire,
    navigationOptions : {
      title: 'commandes Unitaire',
      header: null
    }
  },
    Inscription: {
        screen:Inscription,
        navigationOptions: {
            title: 'Inscription',
          }
    },
    
    
  });
  
  export default createAppContainer(AcceuilStackNavigator)