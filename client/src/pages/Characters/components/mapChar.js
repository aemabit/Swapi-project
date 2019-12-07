import React from 'react'
import styles from '../character.module.css'

const MapChar = props => {
    return(
        <div className={styles.people}>
        {
        props.characters
        .filter((personDetail) => { 
            if(!props.searchTerm){
                return true
            }else{
                return(
                personDetail.name.toLowerCase().startsWith(props.searchTerm.toLowerCase())
                ) 
            }  
        })
        .map((personDetail, index) => {
            return(
            <div 
            key={index} 
            id={index}
            onClick={() => props.openModal(personDetail.url)}
            >
                <img className={styles.iconST} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/iconoToFix.png" alt="iconStarWars"/>
                {personDetail.name}
            </div>
            )
        })
        }
        </div>
    )
}

export default MapChar