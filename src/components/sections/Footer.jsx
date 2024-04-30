import React from 'react'
import style from './Footer.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={style.Footer}>
            <ul>
                <li>
                    <p>Meu contato:</p>
                    <p>12 998888888</p>
                </li>
                <li>
                    <p>Email:</p>
                    <p>cccc@gmail.com</p>
                </li>
            </ul>
            <section id={style.icons}>
                <ul>
                    <li><a href='https://github.com'><FaGithub size={40} /></a></li>
                    <li><a href='https://linkedin.com'><FaLinkedin size={40} /></a></li>
                </ul>
            </section>
        </div>
    )
}

export default Footer
