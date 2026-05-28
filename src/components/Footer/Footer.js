import Link from 'next/link'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer() {

    return (
        <header className={styles.footer}>
            <Image className={styles.footerbgImage} src='/footer-images/footer-bg-img.svg' alt="Footer Image" width={150} height={100} priority={true} />
            <div className={styles.container}>
                <div className={styles.footerLinks}>
                    <div className={styles.footerLinksOne}>
                        <Link href={''}><FontAwesomeIcon icon={faEnvelope} className={styles.icons}></FontAwesomeIcon></Link>
                        <Link href={''}><FontAwesomeIcon icon={faLinkedinIn} className={styles.icons}></FontAwesomeIcon></Link>
                        <Link href={''}><FontAwesomeIcon icon={faInstagram} className={styles.icons}></FontAwesomeIcon></Link>
                    </div>
                    <div className={styles.footerLinksTwo}>
                        <Link href="/#contact" className={styles.footerLink}>Start Project</Link>
                    </div>
                </div>
                <div className={styles.footerAtum}>
                    <Image className={styles.footerImage} src={'/footer-images/AtumFooter.svg'} alt="Footer Image" width={150} height={100} priority={true} />
                </div>
            </div>
        </header>
    )
}