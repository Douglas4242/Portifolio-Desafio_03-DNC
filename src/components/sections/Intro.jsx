import React, { useEffect, useState } from 'react'
import style from './Intro.module.css'
import Button from '../elemens/Button'

const Intro = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const toWrite = ['Ola! Sou Douglas ', 'Desenvolvedor Front-End'];
    const period = 100;

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, period)
        return () => { clearInterval(ticker) }

    }, [title, subtitle])

    const toType = () => {
        let fullText = toWrite[0].substring(0, title.length + 1)
        setTitle(fullText)
        if (fullText === toWrite[0]) {
            let fullSubtitle = toWrite[1].substring(0, subtitle.length + 1)
            setSubtitle(fullSubtitle)
        }
    }


    return (
        <div className={style.Intro}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem <br />
                unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?</p>
            <div>
                <Button text="Saber mais" link="" />
            </div>
        </div>
    )
}

export default Intro


