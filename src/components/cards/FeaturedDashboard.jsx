import React from 'react'
import styles from './FeaturedDashboardCard.module.scss'

const FeaturedDashboard = ({ item, remove }) => {
  return (
    <div className={styles.dashCard}>
        <div className={styles.cardImg}>
            <img src={item.thumbnail} alt="product" />
        </div>
        <div className={styles.cardText}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span>$ {item.price}</span>
        </div>
        <div className={styles.btns}>
            <button onClick={remove}>DELETE</button>
            <button>UPDATE</button>
        </div>
    </div>
  )
}

export default FeaturedDashboard