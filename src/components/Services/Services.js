import Button from '@/components/UI/Button/Button'
import styles from './Services.module.scss'
import Card from '@/components/UI/Card/Card'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faArrowTrendUp, faCode, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Services() {

    const services = [
        {
            icon: faPalette,
            subHeading: "DESIGN",
            id: 1,
            style: "Web Design",
            description: "Immersive UI/UX interfaces that captivate users and converts visitors into loyal customers",
            image: '/services-images/webDesignImg.webp',
        },
        {
            icon: faCode,
            subHeading: "DEVELOPMENT",
            description: "Robust, scalable front-end and back-end code that powers your digital infrastructure.",
            id: 2,
            style: "Web Development",
            image: '/services-images/webDevImg.webp',
        },
        {
            icon: faArrowTrendUp,
            subHeading: "GROWTH",
            description: "Data-driven strategies designed to launch your brand into new markets.",
            id: 3,
            style: "Digital Marketing",
            image: '/services-images/digitalMImage.webp',
        }
    ]

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {services.map((service, index) => (
                        <div key={service.id}>
                            <Card className={styles.serviceCard}>
                                <div className={styles.serviceCardContent}>
                                    <Image className={styles.image} src={service.image} alt="Service Image" width={150} height={100} priority={true} />
                                    <h3 className={styles.subHeading} ><FontAwesomeIcon className={styles.icon} icon={service.icon} />{service.subHeading}</h3>
                                    <h4 className={styles.style}>{service.style}</h4>
                                    <p>{service.description}</p>
                                    <div className={styles.flex}>
                                        <p className={styles.learnMore}>Learn More</p>
                                        <Link href={'/#form'}><Button className={styles.arrowRight} ><FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button></Link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}