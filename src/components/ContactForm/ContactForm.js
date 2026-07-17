'use client';
import styles from './ContactForm.module.scss'
import Card from '@/components/UI/Card/Card'
import Button from '@/components/UI/Button/Button'
import { useState } from 'react';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        service: '',
        budget: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbztUarNiUQil3-rOlf_eOwi_5K69HOvx7-RG1tqg5A_r6JhmqTHilbCF33Sm7QoEYUdAg/exec';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const validateForm = () => {
        const { fullName, email, service } = formData;

        if (!fullName.trim() || !email.trim() || !service) {
            return 'Please fill in all required fields.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            alert(validationError);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    service: formData.service,
                    budget: formData.budget,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (result.status === 'success') {
                setSubmitStatus('success');
                setFormData({ fullName: '', email: '', service: '', budget: '', message: '' });
            } else {
                setSubmitStatus('error');
            }

        } catch (error) {
            setSubmitStatus('error');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactFormSection}>
            <div className={styles.container}>
                <Card className={styles.contactFormCard}>
                    <div className={styles.contactFormHeader}>
                        <h6>CONTACT US</h6>
                        <h2>Let's Help You <span className={styles.brand}>Build</span></h2>
                        <p>Tell us about your vision.</p>
                    </div>

                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <div className={styles.formfullName}>
                                <label htmlFor="fullName" className={styles.formLabel}>
                                    Full Name <span className={styles.formRequired}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="Jane Smith"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className={styles.formEmail}>
                                <label htmlFor="email" className={styles.formLabel}>
                                    Email Address <span className={styles.formRequired}>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="jane@company.com"
                                    disabled={isSubmitting}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formService}>
                                <label htmlFor="service" className={styles.formLabel}>
                                    Service Interest <span className={styles.formRequired}>*</span>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={styles.formSelect}
                                    disabled={isSubmitting}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="web-design">Web Design</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="branding">Branding & Identity</option>
                                    <option value="full-transformation">Full Digital Transformation</option>
                                    <option value="consulting">Not Sure Yet / Consulting</option>
                                </select>
                            </div>
                            <div className={styles.formBudget}>
                                <label htmlFor="budget" className={styles.formLabel}>
                                    Project Budget <span className={styles.formRequired}>*</span>
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className={styles.formSelect}
                                    disabled={isSubmitting}
                                    required
                                >
                                    <option value="">Select a budget range</option>
                                    <option value="under-1k">Under $1,000</option>
                                    <option value="1k-3k">$1,000 - $3,000</option>
                                    <option value="3k-6k">$3,000 - $6,000</option>
                                    <option value="6k-10k">$6,000 - $10,000</option>
                                    <option value="10k-plus">$10,000+</option>
                                    <option value="help-determining">I need help determining this</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formDescription}>
                            <label htmlFor="message" className={styles.formLabel}>
                                Tell Us About Your Project <span className={styles.formRequired}>*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.formTextarea}
                                placeholder="What challenge are you trying to solve? What's your vision for this project?"
                                rows="6"
                                disabled={isSubmitting}
                                required
                            ></textarea>
                        </div>

                        <Button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Start Your Journey'}
                        </Button>

                        {/* Status Messages */}

                        {submitStatus === 'success' && (
                            <div className={styles.successMessage}>
                                🚀 Thanks for reaching out! We'll be in touch within 24 hours.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className={styles.errorMessage}>
                                Something went wrong. Please try again or email us at hello@atum.digital
                            </div>
                        )}
                    </form>
                </Card>
            </div>
        </div>
    )
}