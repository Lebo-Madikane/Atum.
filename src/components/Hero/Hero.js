import Link from 'next/link'
import styles from './Hero.module.scss'
import Image from 'next/image'
import Button from '@/components/UI/Button/Button'

export default function Hero() {

    return (
        <section id='home' className={styles.heroSection}>
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

            <Image className={styles.heroSection__bgImage} src='/hero-images/heroBg.svg' alt="Hero Image" width={150} height={100} priority={true} />

            {/* Content */}
            <div className={styles.heroSection__content}>
                <span className={styles.heroSection__content__availableContainer}><div className={styles.heroSection__content__availableContainer__onlineIcon}></div>AVAILABLE FOR NEW PROJECTS</span>
                <h1>We Build Web <span className={styles.universes}>Assets</span></h1>
                <p>Crafting high-quality digital experiences<br /> that launch ambitious brands.</p>
                <div className={styles.heroSection__content__btnContainer}>
                    <Link href={'/#contact'}><Button>Start Project 🚀</Button></Link>
                    <Link href={'/#services'}><Button variant='secondary'>View Services</Button></Link>
                </div>
            </div>
        </section>
    )
}