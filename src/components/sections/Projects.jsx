import React, { useState } from 'react'
import style from './Project.module.css'
import Card from '../elemens/Card'
import thumbnail from '../images/project.svg'
import Button from '../elemens/Button'
import Nav from 'react-bootstrap/Nav';


const Projects = () => {


    const [more, setMore] = useState(false)

    function moreOn() {
        setMore(true)
    }

    function moreOff() {
        setMore(false)
    }

    return (
        <>
            {more === false ? (
                <div id='Projects' className={style.Projects}>
                    <h1>Projetos</h1>
                    <section id={style.ProjectsCards}>
                        <div className={style.cardGrid}>
                            <Card img={thumbnail} title='Projeto 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                            <Card img={thumbnail} title='Projeto 2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                            <Card img={thumbnail} title='Projeto 3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                            <Card img={thumbnail} title='Projeto 4' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                        </div>
                    </section>
                    <div id={style.More}>
                        <Button click={moreOn} text="Mostrar mais" />
                    </div>
                </div>
            ) : (
                <div>
                    <div id='Projects' className={style.Projects}>
                        <h1>Projetos</h1>
                        <section id={style.ProjectsCards}>
                            <div className={style.cardGrid}>
                                <Card img={thumbnail} title='Projeto 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                                <Card img={thumbnail} title='Projeto 2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                                <Card img={thumbnail} title='Projeto 3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                                <Card img={thumbnail} title='Projeto 4' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                                <Card img={thumbnail} title='Projeto 5' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                                <Card img={thumbnail} title='Projeto 6' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                                <Card img={thumbnail} title='Projeto 7' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                                <Card img={thumbnail} title='Projeto 8' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit accusamus qui eligendi blanditiis magnam quis rem unt esse! Accusamus et corporis architecto vitae. Temporibus, excepturi! Nulla nisi sit quidem?' />
                            </div>
                        </section>
                        <div id={style.More}>
                            <Nav.Link href='#Projects'><Button click={moreOff} text="Mostrar menos" /></Nav.Link>
                        </div>
                    </div>
                </div>

            )}
        </>

    )
}

export default Projects
