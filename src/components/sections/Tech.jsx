import React from 'react'
import style from './Tech.module.css'
import Banner from '../elemens/Banner'


const Tech = () => {
    return (
        <div id='Tech' className={style.Tech}>
            <h1>Tecnologias</h1>
            <section id={style.TechImages}>
                <Banner />
            </section>
        </div>
    )
}

export default Tech
