import React from 'react'
import styles from './FeaturedBasket.module.scss'
import { FaHeart } from "react-icons/fa";

const FeaturedBasket = ({item, onclickbasket, onclickwish}) => {
  return (
    <>
        <div className={styles.featuredProductsCard}>
            <div className={styles.cardImg}>
                <img src={item.thumbnail} alt="product" />
            </div>
            <div className={styles.cardText}>
                <h3>{item.title}</h3> <span>$ {item.price}</span>
                <p>{item.description}</p>
                <button onClick={onclickbasket}>ADD TO BASKET</button>
                <button onClick={onclickwish}>ADD TO WISHLIST <FaHeart /></button>
            </div>
        </div>
    </>
  )
}

export default FeaturedBasket