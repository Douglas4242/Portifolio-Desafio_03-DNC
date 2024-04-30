import React from 'react'
import style from './Lifeevents.module.css'

const Lifeevents = ({ event }) => {
    return (
        <div className={style.Lifeevents}>
            <p>{event}</p>
        </div>
    )
}

export default Lifeevents
