import React from 'react'
import style from './Banner.module.css'
import css from '../images/css.svg'
import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import react from '../images/react.svg'


const Banner = () => {
    return (
        <div className={style.Banner}>
            <img src={css} />
            <img src={html} />
            <img src={javascript} />
            <img src={react} />
        </div>
    )
}

export default Banner
