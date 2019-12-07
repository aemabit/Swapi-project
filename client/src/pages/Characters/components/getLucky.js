import React from 'react'
import styles from '../character.module.css'

const GetLucky = (props) => {
    return(
        <div className={styles.takeALook}>
            <span>WHO ARE YOU LOOKING FOR?</span>
            <div className={styles.feeLucky}>
                <input
                id="searchTerm"
                type="text"
                placeholder="Type here!"
                autoComplete="off"
                onChange={props.handleSearch}
                className={styles.lookInput}
                />
                <button 
                    className={styles.getLucky} 
                    onClick={()=> props.getLucky()}
                > 
                    I feel lucky 
                </button>
            </div>
        </div>
    )
}

export default GetLucky