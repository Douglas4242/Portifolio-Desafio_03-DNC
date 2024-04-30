import React from 'react'
import style from './AboutMe.module.css'
import timeline from '../images/timeline.svg'
import Lifeevents from '../elemens/Lifeevents'

const AboutMe = () => {
    return (
        <div id='AboutMe' className={style.AboutMe}>
            <h1>Sobre Mim</h1>
            <section id={style.dates}>
                <Lifeevents event='2018' />
                <Lifeevents event='2020' />
                <Lifeevents event='2022' />
                <Lifeevents event='2024' />
            </section>
            <section id={style.Timeline} >
                <img src={timeline} />
            </section>
            <section id={style.events}>
                <Lifeevents event='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                <Lifeevents event='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                <Lifeevents event='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                <Lifeevents event='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
            </section>
        </div>
    )
}

export default AboutMe
