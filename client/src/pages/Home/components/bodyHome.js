import React from 'react'
import styles from '../home.module.css'
import {Animated} from "react-animated-css"
import TheLinks from './charactersLink'

class BodyHome extends React.Component {
  state = { 
    charactersLink: 'https://leo.nyc3.digitaloceanspaces.com/swapi-pics/firstcharacter.jpg',
    filmsLink: 'https://leo.nyc3.digitaloceanspaces.com/swapi-pics/presentation.png',
    starshipsLink: 'https://leo.nyc3.digitaloceanspaces.com/swapi-pics/the-falcon-wallpaper.jpg'
  }

  render(){
    return(
      <>
        <div className={styles.bigText}>
          <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
            <span>EXPLORE THE UNIVERSE OF</span>
          </Animated>
          <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
            <span>STAR WARS</span>
          </Animated>
        </div>
        
        <div className={styles.containerGuide}>
          <TheLinks 
            filmsLink={this.state.filmsLink}
            charactersLink={this.state.charactersLink}
            starshipsLink={this.state.starshipsLink}
          />
        </div> 
      </>
    )
   }   
  }

   export default BodyHome