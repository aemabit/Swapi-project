import React from 'react'
import styles from '../home.module.css'
import ReactPlayer from 'react-player'

const VideoHome = () => {
    return(
        <>
        <div className={styles.presentationScreen}>
            <ReactPlayer
                url='https://leo.nyc3.digitaloceanspaces.com/swapi-pics/charactersVideo%20(online-video-cutter.com)%20(1).mp4'
                className={styles.reactPlayer}
                playing 
                controls
                autoPlay = {true}
                width='100%'
                height='100%'
            />
        </div>
      </>
    )
}

export default VideoHome