import React from 'react'
import styles from './FeaturedProducts.module.scss'

const FeaturedProducts = () => {
  return (
    <div className={styles.featuredProducts}>
        <div className={styles.container}>
            <div className={styles.featuredProductsText}>
                <h1>Featured Robotics Products to Show</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={styles.featuredProductsCards}>
                <div className={styles.featuredProductsCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/robotics/img/p1.png" alt="product" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>The Upper Eye</h3>
                        <p>Who are in extremely love with eco friendly system.</p>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>

                <div className={styles.featuredProductsCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/robotics/img/p2.png" alt="product" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>The Crab Wheel</h3>
                        <p>Who are in extremely love with eco friendly system.</p>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>

                <div className={styles.featuredProductsCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/robotics/img/p3.png" alt="product" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>The Plug Ninja</h3>
                        <p>Who are in extremely love with eco friendly system.</p>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>

                <div className={styles.featuredProductsCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/robotics/img/p4.png" alt="product" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>The Controller</h3>
                        <p>Who are in extremely love with eco friendly system.</p>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts