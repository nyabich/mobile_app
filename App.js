// App.js

import React from 'react'
import Acceuil from './Components/Acceuil'
import Inscription from './Components/Inscription'
import Commande from './Components/Commande'
import Navigation from './Navigation/Navigation'


export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}
