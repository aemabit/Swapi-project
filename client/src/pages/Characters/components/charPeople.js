import React from 'react'
import CustomStyleModal from '../styleModal.module.css'

const TheModal =  props => {
    return(
        <>
        <div onClick={props.closeModal}><i className="fas fa-times"></i></div>
        <div className={CustomStyleModal.subtitleMain}>
            <span id={CustomStyleModal.subTitle}>{props.peopleSelect.name}</span>
        </div>
        <div className={CustomStyleModal.containerList}>
            <ul className={CustomStyleModal.containerLeft}>
                <li className={CustomStyleModal.listModal}><i className="fas fa-long-arrow-alt-up"></i> Height: <span>{`${props.peopleSelect.height}`}</span></li>
                <li className={CustomStyleModal.listModal}><i className="fas fa-weight-hanging"></i> Mass: <span>{`${props.peopleSelect.mass}`}</span></li>
                <li className={CustomStyleModal.listModal}><i className="fas fa-fill-drip"></i> Hair Color: <span>{`${props.peopleSelect.hair_color}`}</span></li>
                <li className={CustomStyleModal.listModal}><i className="fas fa-kiss-beam"></i> Skin Color: <span>{`${props.peopleSelect.skin_color}`}</span></li>
            </ul>
            
            <ul className={CustomStyleModal.containerRight}>
                <li className={CustomStyleModal.listModal}><i className="fas fa-eye"></i> Eye Color: <span>{`${props.peopleSelect.eye_color}`}</span></li>
                <li className={CustomStyleModal.listModal}><i className="fas fa-birthday-cake"></i> Birth Year: <span>{`${props.peopleSelect.birth_year}`}</span></li>
                <li className={CustomStyleModal.listModal}><i className="fas fa-mercury"></i> Gender: <span>{`${props.peopleSelect.gender}`}</span></li>
                <li className={CustomStyleModal.listModal}><i className="fas fa-sync"></i> Url: <span>{`${props.peopleSelect.url}`}</span></li>
            </ul>

        </div>
        </>
    )
}

export default TheModal