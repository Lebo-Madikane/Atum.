import Link from 'next/link'
import styles from './LearnMore.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

export default function LearnMore() {

    return (
        <section className={styles.learnMore}>
            <div className={styles.container}>
                <Card className={styles.learnMoreCard}>
                    <div className={styles.header}>Image</div>
                    <div className={styles.body}>
                        <div className={styles.text}>
                            <h7>Digital Marketing</h7>
                            <p>Text description of sector/solution</p>
                            <p>Text description of sector/solution</p>
                        </div>
                        <div className={styles.ctaBtn}>START PROJECT</div>
                    </div>
                    <div className={styles.footer}>WORK COMPLETED</div>
                </Card>
            </div>
        </section>
    )
}