import Link from 'next/link'
import styles from './CtaForm.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";

export default function CtaForm() {

    return (
        <section className={styles.ctaForm}>
            <div className={styles.container}>
                <Card className={styles.ctaCard}>
                    <FontAwesomeIcon icon={faPlaneDeparture} className={styles.icon}></FontAwesomeIcon>
                    <h3>Ready for liftoff?</h3>
                    <p>Let's discuss how we can elevate your brand to the next dimension.</p>
                    <Link href={''}><Button><FontAwesomeIcon icon={faEnvelope} className={styles.iconEnvelope}></FontAwesomeIcon>Get in Touch</Button></Link>
                </Card>
            </div>
        </section>
    )
}