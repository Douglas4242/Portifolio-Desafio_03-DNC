import React from 'react';
import style from './Navbar.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (
        <div className={style.Navbar}>
            <div>
                <ul>
                    <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                    <li><Nav.Link href='#Tech'>Tecnologias</Nav.Link></li>
                    <li><Nav.Link href='#AboutMe'>Sobre Mim</Nav.Link></li>
                </ul>
            </div>
            <ul>
                <li><a href='https://github.com'><FaGithub size={25} /></a></li>
                <li><a href='https://linkedin.com'><FaLinkedin size={25} /></a></li>
            </ul>
        </div>
    )
}

export default Navbar
