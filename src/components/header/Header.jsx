import React from 'react'
import styles from './Header.module.scss'
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigation = useNavigate()

  return (
    <div className={styles.headerBox}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="" />
            </div>
            <div className={styles.navBar}>
                <ul>
                    <li  onClick={() => navigation('/')}><a href="">HOME</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">PRODUCTS</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li><a href="">DROPDOWN</a></li>
                </ul>
            </div>
            <div className={styles.iconBox}>
                <button onClick={() => navigation('/basket')}><RiShoppingBag4Fill /></button>
                <button onClick={() => navigation('/wishlist')}><FaHeart /></button>
                <button onClick={() => navigation('/dashboard')}><MdAdminPanelSettings /></button>
                <div className={styles.menu}>
                    <span><IoMenu /></span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header