import React from 'react'
import style from './Button.module.css'

const Button = ({ text, link, click }) => {
    return (
        <div>
            <a href={link}>
                <button onClick={click} className={style.Btn}>{text}</button>
            </a>
        </div>
    )
}

export default Button
