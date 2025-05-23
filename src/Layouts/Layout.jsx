import React from 'react'
import styles from "./Layout.module.css";
import logo from "../assets/logo.png";
import { SlArrowDown } from "react-icons/sl";


function Layout({ children }) {
    return (

        <>
            <header className={styles.header}>
                <ul className={styles.menu}>
                <img src={logo} alt="" />
                    <li>Home</li>
                    <li>Novel</li>
                    <li>Psychology</li>
                    <li>History</li>
                    <li>Poem</li>
                    <li style={{marginRight:"5px"}}>My Account
                    <SlArrowDown />
                    </li>
                </ul>
            </header>
            {children}
            <footer className={styles.footer}>
                Developed By Shana With ☕
            </footer>
        </>
    )
}

export default Layout