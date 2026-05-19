import Link from 'next/link'
import Image from 'next/image'
import styles from './LearnMore.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function LearnMore() {

    const images = [
        {
            id: 1,
            image: '/learnMore-images/carousel/audienceImgOne.webp',
        },
        {
            id: 2,
            image: '/learnMore-images/carousel/audienceImg.webp',
        },
        {
            id: 3,
            image: '/learnMore-images/carousel/audienceImgTwo.webp',
        },
        {
            id: 4,
            image: '/learnMore-images/carousel/audienceImgFour.webp',
        },
        {
            id: 5,
            image: '/learnMore-images/carousel/audienceImgFive.webp',
        },
        {
            id: 6,
            image: '/learnMore-images/carousel/audienceImgSeven.webp',
        },
    ]

    return (
        <section className={styles.learnMore}>
            <div className={styles.container}>
                <Card className={styles.learnMoreCard}>
                    <div className={styles.header}><Image className={styles.image} src='/learnMore-images/carousel/audienceImgThree.webp' alt="Audience Image" width={150} height={100} priority={true} /></div>
                    <div className={styles.body}>
                        <div className={styles.text}>
                            <h7>Digital Marketing</h7>
                            <p>Your website is often the first impression potential clients have of your brand. In seconds, visitors decide whether to stay or leave.</p>
                            <p>We create visually striking and user-focused digital experiences that build trust, improve engagement, and increase conversions.</p>
                            <p>● Responsive ● UI/UX Strategy ● Brand Integration</p>
                        </div>
                        <Button className={styles.ctaBtn}>Start Project</Button>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.marqueeTrack}>
                            {images.map((image, index) => (
                                <div className={styles.imageContainer} key={image.id}>
                                    <Image className={styles.image} src={image.image} alt="Marketing Image" width={150} height={100} priority={true} />
                                </div>
                            ))}
                            {images.map((image, index) => (
                                <div className={styles.imageContainer} key={image.id}>
                                    <Image className={styles.image} src={image.image} alt="Marketing Image" width={150} height={100} priority={true} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}