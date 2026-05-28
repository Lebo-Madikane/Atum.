'use client';

import { useState } from 'react';
import CtaForm from '@/components/CtaForm/CtaForm';
import ContactForm from '@/components/ContactForm/ContactForm';
import Modal from '@/components/Modal/Modal';
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import Services from "@/components/Services/Services"
import Footer from "@/components/Footer/Footer"


export default function HomePage() {

    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsContactModalOpen(true);
    };

    const handleCloseContactModal = () => {
        setIsContactModalOpen(false);
    };

    return (
        <div>
            <main>
                <Header />
                <Hero />
                <About />
                <Services />
                {/* CtaForm with modal trigger */}
                <CtaForm onContactClick={handleContactClick} />

                {/* Contact Modal */}
                <Modal isOpen={isContactModalOpen} onClose={handleCloseContactModal}>
                    <ContactForm />
                </Modal>
                <Footer />
            </main>
        </div>
    )
}