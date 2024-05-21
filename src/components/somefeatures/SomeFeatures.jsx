import React from 'react'
import styles from './SomeFeatures.module.scss'
import { CiUser } from "react-icons/ci";
import { GrTextWrap } from "react-icons/gr";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { BsChat } from "react-icons/bs";

const SomeFeatures = () => {
  return (
    <div className={styles.someFeatures}>
        <div className={styles.container}>
            <div className={styles.someFeaturesText}>
                <h1>Some Features that Made us Unique</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={styles.someFeaturesCards}>
                <div className={styles.someFeaturesCard}>
                    <div className={styles.cardTitle}>
                        <span><CiUser /></span> <h4>Expert Technicians</h4>
                    </div>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>

                <div className={styles.someFeaturesCard}>
                    <div className={styles.cardTitle}>
                        <span><GrTextWrap /></span> <h4>Professional Service</h4>
                    </div>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>

                <div className={styles.someFeaturesCard}>
                    <div className={styles.cardTitle}>
                        <span><PiPhoneDisconnectBold /></span> <h4>Great Support</h4>
                    </div>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>

                <div className={styles.someFeaturesCard}>
                    <div className={styles.cardTitle}>
                        <span><IoRocketOutline /></span> <h4>Technical Skills</h4>
                    </div>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>

                <div className={styles.someFeaturesCard}>
                    <div className={styles.cardTitle}>
                        <span><IoDiamondOutline /></span> <h4>Highly Recomended</h4>
                    </div>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>

                <div className={styles.someFeaturesCard}>
                    <div className={styles.cardTitle}>
                        <span><BsChat /></span> <h4>Positive Reviews</h4>
                    </div>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SomeFeatures