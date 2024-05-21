import React from 'react'
import styles from './LatestNews.module.scss'

const LatestNews = () => {
  return (
    <div className={styles.latestNews}>
        <div className={styles.container}>
            <div className={styles.latestNewsText}>
                <h1>Latest News from our Blog</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className={styles.latestNewsCards}>
                <div className={styles.latestNewsCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/robotics/img/b1.jpg" alt="robotics" />
                    </div>
                    <div className={styles.cardText}>
                        <div className={styles.btns}>
                            <button>Travel</button>
                            <button>Life Style</button>
                        </div>
                        <h3>Portable latest Fashion for young women</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <span>31st January, 2018</span>
                    </div>
                </div>

                <div className={styles.latestNewsCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/robotics/img/b2.jpg" alt="robotics" />
                    </div>
                    <div className={styles.cardText}>
                        <div className={styles.btns}>
                            <button>Travel</button>
                            <button>Life Style</button>
                        </div>
                        <h3>Portable latest Fashion for young women</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <span>31st January, 2018</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews