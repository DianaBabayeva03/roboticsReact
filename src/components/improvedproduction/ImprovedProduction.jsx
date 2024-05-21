import React from 'react'
import styles from './ImprovedProduction.module.scss'

const ImprovedProduction = () => {
  return (
    <div className={styles.improvedProduction}>
        <div className={styles.container}>
            <div className={styles.productionText}>
                <h1>Improved Production level with Robotics</h1>
                <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
                <button>VIEW DETAILS</button>
            </div>
            <div className={styles.productionImg}>
                <img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ImprovedProduction