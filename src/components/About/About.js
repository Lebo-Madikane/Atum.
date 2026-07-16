import Link from 'next/link'
import styles from './About.module.scss'
import Image from 'next/image'

export default function About() {

    return (
        <header id='about' className={styles.aboutSection}>
            <Image className={styles.bgImage} src='/about-images/about-bg-image.svg' alt="About Image" width={150} height={100} priority={true} />
            <div className={styles.aboutSection__container}>
                <div className={styles.aboutSection__container__line}></div>
                <h2 className={styles.servicesText}>About</h2>
                <div className={styles.aboutSection__container__paragraph}>
                    <p className={styles.noToMobile}>"We navigate the digital cosmos to bring your brand to life with precision, creativity, and cutting-edge technology.</p>
                    <p>Whether refining your personal brand, amplifying your online presence, or crafting stunning graphics and websites — we deliver comprehensive digital solutions tailored to your vision."</p>
                </div>
            </div>
        </header>
    )
}