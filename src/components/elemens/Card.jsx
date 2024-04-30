import React from 'react'
import style from './Card.module.css'
import Button from './Button'

const Card = ({ img, title, text, link }) => {
    return (
        <div className={style.Card}>
            <img src={img} alt='ERROR' />
            <h3>{title}</h3>
            <p>{text}</p>
            <Button text={"Clique aqui"} link={link} />
        </div>
    )
}

export default Card
