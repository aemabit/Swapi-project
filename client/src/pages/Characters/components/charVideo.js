import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../character.module.css'

const VideoChar = () => {
    return(
        <div className={styles.mainChar}>
            <div className={styles.fixSpace}></div>
        <ReactPlayer
            url='https://leo.nyc3.digitaloceanspaces.com/swapi-pics/i_am_your_father.mp4'
            className={styles.reactPlayer}
            playing 
            controls
            autoPlay = {true}
            width='100%'
            height='100%'
        />
    </div>
    )
}

export default VideoChar