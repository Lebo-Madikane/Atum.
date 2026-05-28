'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './LearnMore.module.scss';
import Card from '@/components/UI/Card/Card';
import Button from '@/components/UI/Button/Button';
import { servicesData } from '@/data/servicesData';

// Receive the service type as a prop
export default function LearnMore({ serviceType = 'webDesign' }) {
    const [serviceInfo, setServiceInfo] = useState(null);

    useEffect(() => {
        // Map the serviceType to the correct data
        const mappedService = servicesData[serviceType];
        if (mappedService) {
            setServiceInfo(mappedService);
        } else {
            // Fallback to webDesign if invalid service type
            setServiceInfo(servicesData.webDesign);
        }
    }, [serviceType]);

    if (!serviceInfo) {
        return <div>Loading...</div>;
    }

    return (
        <section className={styles.learnMore}>
            <div className={styles.container}>
                <Card className={styles.learnMoreCard}>
                    {/* Header Image */}
                    <div className={styles.header}>
                        <Image
                            className={styles.image}
                            src={serviceInfo.headerImage}
                            alt={`${serviceInfo.title} Header`}
                            width={150}
                            height={100}
                            priority={true}
                        />
                    </div>

                    {/* Body Content */}
                    <div className={styles.body}>
                        <div className={styles.text}>
                            {/* Title with Badge */}
                            <div className={styles.titleSection}>
                                <span className={styles.badge}>{serviceInfo.tagline}</span>
                                <h2 className={styles.title}>{serviceInfo.title}</h2>
                            </div>

                            {/* Challenge */}
                            <p className={styles.paragraph}>
                                {serviceInfo.challenge}
                            </p>

                            {/* Solution */}
                            <p className={styles.paragraph}>
                                {serviceInfo.solution}
                            </p>

                            {/* Highlights */}
                            <div className={styles.highlights}>
                                {serviceInfo.highlights.map((highlight, index) => (
                                    <span key={index} className={styles.highlight}>
                                        ● {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href={serviceInfo.ctaLink}>
                            <Button className={styles.ctaBtn}>
                                {serviceInfo.ctaText}
                            </Button>
                        </Link>
                    </div>

                    {/* Footer Carousel */}
                    <div className={styles.footer}>
                        <div className={styles.marqueeTrack}>
                            {/* First set of images */}
                            {serviceInfo.carouselImages.map((image) => (
                                <div className={styles.imageContainer} key={`first-${image.id}`}>
                                    <Image
                                        className={styles.image}
                                        src={image.image}
                                        alt={`${serviceInfo.title} Portfolio`}
                                        width={150}
                                        height={100}
                                        priority={true}
                                    />
                                </div>
                            ))}

                            {/* Duplicate set for seamless loop */}
                            {serviceInfo.carouselImages.map((image) => (
                                <div className={styles.imageContainer} key={`second-${image.id}`}>
                                    <Image
                                        className={styles.image}
                                        src={image.image}
                                        alt={`${serviceInfo.title} Portfolio`}
                                        width={150}
                                        height={100}
                                        priority={true}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}