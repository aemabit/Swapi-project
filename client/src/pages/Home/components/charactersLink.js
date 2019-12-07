import React from 'react'
import styles from '../home.module.css'
import {Animated} from "react-animated-css"
import { NavLink } from 'react-router-dom'

const TheLinks = props => {
    return(
      <>
      <NavLink exact to="/characters">
        <div className={styles.boxMainImg}>
          <span className={styles.title}>CHARACTERS</span>
          <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <img className={styles.imgAll} src={props.charactersLink} alt="Characters"></img>
          </Animated>
        </div>
      </NavLink>
      <NavLink exact to="/films">
      <div className={styles.boxMainImg}>
        <span className={styles.title}>FILMS</span>
        <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
          <img className={styles.imgAll} src={props.filmsLink} alt="Characters"></img>
        </Animated>
      </div>
    </NavLink>
    <NavLink exact to="/starships">
    <div className={styles.boxMainImg}>
      <span className={styles.title}>STARSHIPS</span>
      <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
        <img className={styles.imgAll} src={props.starshipsLink} alt="Characters"></img>
      </Animated>
    </div>
    </NavLink>
    </>
    )
}

export default TheLinks