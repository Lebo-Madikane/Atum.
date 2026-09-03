'use client';

import { useState } from 'react';
import Button from '@/components/UI/Button/Button'
import styles from './Services.module.scss'
import Card from '@/components/UI/Card/Card'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/Modal/Modal';
import LearnMore from '@/components/LearnMore/LearnMore';
import ContactForm from '@/components/ContactForm/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faArrowTrendUp, faCode, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

export default function Services() {
    // State for modal
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for Contact Form modal
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const services = [
        {
            icon: faPalette,
            subHeading: "DESIGN",
            id: 1,
            style: "Web Design",
            description: "Immersive UI/UX interfaces that captivate users and converts visitors into loyal customers",
            image: '/services-images/webDesignImg.svg',
            serviceType: 'webDesign', // Maps to servicesData key
        },
        {
            icon: faCode,
            subHeading: "DEVELOPMENT",
            description: "Robust, scalable front-end and back-end code that powers your digital infrastructure.",
            id: 2,
            style: "Web Development",
            image: '/services-images/webDevImg.svg',
            serviceType: 'webDevelopment', // Maps to servicesData key
        },
        {
            icon: faArrowTrendUp,
            subHeading: "GROWTH",
            description: "SEO and Data-driven strategies designed to launch your brand into new markets.",
            id: 3,
            style: "Digital Marketing",
            image: '/services-images/digitalMarketImg.svg',
            serviceType: 'digitalMarketing', // Maps to servicesData key
        }
    ]

    // Handle Learn More button click
    const handleLearnMore = (serviceType) => {
        setSelectedService(serviceType);
        setIsModalOpen(true);
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Optional: Reset service after modal closes
        setTimeout(() => setSelectedService(null), 300);
    };

    // Handle "Start Project" button in LearnMore (opens Contact modal and closes LearnMore)
    const handleContactClick = () => {
        setIsModalOpen(false);
        setIsContactModalOpen(true);
    };

    // Close Contact modal
    const handleCloseContactModal = () => {
        setIsContactModalOpen(false);
    };

    return (
        <>
            <motion.section id="services" className={styles.services}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            >
                <Image
                    className={styles.ServicebgImage}
                    src='/services-images/services-bg-img.svg'
                    alt="Services Image"
                    width={150}
                    height={100}
                    priority={true}
                />
                <div className={styles.servicesContainer}>
                    <h2 className={styles.servicesText}>Our Services</h2>
                    <p className={`${styles.servicesText} ${styles.headerP}`}>From beautiful interfaces to scalable systems, we've got you covered.</p>
                    <div className={styles.contentContainer}>
                        <div className={styles.content}>
                            {services.map((service) => (
                                <div key={service.id}>
                                    <Card className={styles.serviceCard}>
                                        <div className={styles.serviceCardContent}>
                                            <Image
                                                className={styles.image}
                                                src={service.image}
                                                alt={`${service.style} Service`}
                                                width={150}
                                                height={100}
                                                priority={true}
                                            />
                                            <h3 className={styles.subHeading}>
                                                <FontAwesomeIcon
                                                    className={styles.icon}
                                                    icon={service.icon}
                                                />
                                                {service.subHeading}
                                            </h3>
                                            <h4 className={styles.style}>{service.style}</h4>
                                            <p>{service.description}</p>
                                            <div className={styles.flex}>
                                                {/* Learn More Button - Opens Modal */}
                                                <button
                                                    className={styles.learnMore}
                                                    onClick={() => handleLearnMore(service.serviceType)}
                                                    aria-label={`Learn more about ${service.style}`}
                                                >
                                                    Learn More
                                                </button>
                                                <Button className={styles.arrowRight}
                                                    onClick={() => handleLearnMore(service.serviceType)}
                                                    aria-label={`Learn more about ${service.style}`}>
                                                    <FontAwesomeIcon
                                                        className={styles.icon}
                                                        icon={faArrowRight}
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Modal with LearnMore Component */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedService && (
                    <LearnMore
                        serviceType={selectedService}
                        onContactClick={handleContactClick}
                    />
                )}
            </Modal>

            {/* Contact Form Modal */}
            <Modal isOpen={isContactModalOpen} onClose={handleCloseContactModal}>
                <ContactForm />
            </Modal>
        </>
    )
}