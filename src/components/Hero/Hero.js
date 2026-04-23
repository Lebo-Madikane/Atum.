import Link from 'next/link'
import styles from './Hero.module.scss'

export default function Hero() {

    return (
        <section className={styles.heroSection}>
            {/* Background Layers */}
            <div className={styles.heroSection__bgBase}></div>

            {/* Nebula Overlay */}
            <div className={styles.heroSection__nebula}>
                <div className={`${styles.heroSection__nebula__blob} ${styles.heroSection__nebula__blob__purple}`}></div>
                <div className={`${styles.heroSection__nebula__blob} ${styles.heroSection__nebula__blob__blue}`}></div>
                <div className={`${styles.heroSection__nebula__blob} ${styles.heroSection__nebula__blob__pink}`}></div>
            </div>

            {/* Noise Texture Overlay */}
            <div className={styles.heroSection__noise}></div>

            {/* Content */}
            <div className={styles.heroSection__content}>
   
            </div>
        </section>
    )
}