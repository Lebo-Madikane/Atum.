import Link from 'next/link'
import styles from './About.module.scss'

export default function About() {

    return (
        <header className={styles.aboutSection}>
            <div className={styles.aboutSection__container}>
                <div className={styles.aboutSection__container__line}></div>
                <div className={styles.aboutSection__container__paragraph}>
                    <p>"We navigate the digital cosmos to bring your brand to life with precision, creativity, and cutting-edge technology.</p>
                    <p>Whether refining your personal brand, amplifying your online presence, or crafting stunning graphics and websites — we deliver comprehensive digital communication solutions tailored to your vision."</p>
                </div>
            </div>
        </header>
    )
}