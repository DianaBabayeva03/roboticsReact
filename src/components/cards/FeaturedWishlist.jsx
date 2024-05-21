import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './FeaturedBasket.module.scss'
import { FaHeartCircleMinus } from "react-icons/fa6";

const FeaturedWishlist = ({ item, deletewish }) => {
  return (
    <>
        <div className={styles.featuredProductsCard}>
            <div className={styles.cardImg}>
                <img src={item.thumbnail} alt="product" />
            </div>
            <div className={styles.cardText}>
                <h3>{item.title}</h3> <span>$ {item.price}</span>
                <p>{item.description}</p>
                <button>ADD TO BASKET</button>
                <button onClick={deletewish}>DELETE <FaHeartCircleMinus /></button>
            </div>
        </div>
    </>
  )
}

export default FeaturedWishlist