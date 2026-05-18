import Link from 'next/link'
import styles from './ContactForm.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {

    return (
        <section className={styles.contactForm}>
            <div className={styles.container}>
                <Card className={styles.contactFormCard}>

                </Card>
            </div>
        </section>
    )
}