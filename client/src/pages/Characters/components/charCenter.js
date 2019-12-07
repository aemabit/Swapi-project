import React from 'react'
import styles from '../character.module.css'

const InfoMiddle = () => {
    return (
        <>
            <div className={styles.bigText}>
                <span>"MAY THE FORCE BE WITH YOU"</span>
            </div>

            <div className={styles.boothSides}>
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/luke.jpg" alt="luke"></img></div> 
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/leia.jpg" alt="Leia"></img></div>  
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/hansolo.jpg" alt="Solo"></img></div>  
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/yoda.jpg" alt="yoda"></img></div> 
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/darthvader.jpg" alt="darth"></img></div>  
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/boba-fett.jpg" alt="boba-fett"></img></div>  
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/grovius.jpg" alt="grovius"></img></div>  
                <div className={styles.boxImg}><img className={styles.imgAll} src="https://leo.nyc3.digitaloceanspaces.com/swapi-pics/darth maul.jpg" alt=""></img></div>  
            </div>

            <div className={styles.bigText}>
                <span>CHARACTERS</span>
            </div>
        </>
    )
}

export default InfoMiddle