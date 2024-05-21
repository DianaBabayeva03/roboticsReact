import React from 'react'
import styles from './Footer.module.scss'
import { GoHeart } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerBox}>
        <div className={styles.container}>
            <h5>Copyright ©2024 All rights reserved | This template is made with <span><GoHeart /></span> by <span>Colorlib</span></h5>
            <div className={styles.iconBox}>
                <button><FaFacebookF /></button>
                <button><FaTwitter /></button>
                <button><TfiWorld /></button>
                <button><FaBehance /></button>
            </div>
        </div>
    </div>
  )
}

export default Footer