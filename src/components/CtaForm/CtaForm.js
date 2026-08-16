'use client';

import styles from './CtaForm.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

export default function CtaForm({ onContactClick }) {
    const handleGetInTouchClick = () => {
        // Call the function passed from parent component
        onContactClick();
    };

    return (
        <motion.section id='contact' className={styles.ctaForm}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
        >
            <div className={styles.container}>
                <Card className={styles.ctaCard}>
                    <FontAwesomeIcon icon={faPlaneDeparture} className={styles.icon}></FontAwesomeIcon>
                    <h3>Ready for liftoff?</h3>
                    <p>Let's discuss how we can elevate your brand to the next dimension.</p>

                    {/* Changed from Link to button */}
                    <Button
                        className={styles.ctaButton}
                        onClick={handleGetInTouchClick}
                        aria-label="Open contact form"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className={styles.iconEnvelope}></FontAwesomeIcon>
                        Get in Touch
                    </Button>
                </Card>
            </div>
        </motion.section>
    )
}