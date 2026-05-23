'use client';
import Link from 'next/link'
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
        projectDescription: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Your form submission logic here
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    service: '',
                    budget: '',
                    projectDescription: '',
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.contactFormSection}>
            <div className={styles.container}>
                <Card className={styles.contactFormCard}>
                    <div className={styles.contactFormHeader}>
                        <h9>CONTACT US</h9>
                        <h2>Let's Build Your Brand</h2>
                        <p>Tell us about your vision, and we'll show you how to make it reality.</p>
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <div className={styles.formfullName}>
                                <label htmlFor="fullName" className="formLabel">
                                    Full Name <span className="formRequired">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="formInput"
                                    placeholder="Jane Smith"
                                    required
                                />
                            </div>
                            <div className={styles.formEmail}>
                                <label htmlFor="email" className="formLabel">
                                    Email Address <span className="formRequired">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="formInput"
                                    placeholder="jane@company.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formService}>
                                <label htmlFor="service" className="formLabel">
                                    Service Interest <span className="formRequired">*</span>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="formSelect"
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
                                <label htmlFor="budget" className="formLabel">
                                    Project Budget <span className="formRequired">*</span>
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="formSelect"
                                    required
                                >
                                    <option value="">Select a budget range</option>
                                    <option value="under-5k">Under R50,000</option>
                                    <option value="5k-15k">R50,000 - R150,000</option>
                                    <option value="15k-30k">R150,000 - R300,000</option>
                                    <option value="30k-50k">R300,000 - R500,000</option>
                                    <option value="50k-plus">R500,000+</option>
                                    <option value="help-determining">I need help determining this</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formDescription}>
                            <label htmlFor="projectDescription" className="formLabel">
                                Tell Us About Your Project <span className="formRequired">*</span>
                            </label>
                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                className="formTextarea"
                                placeholder="What challenge are you trying to solve? What's your vision for this project?"
                                rows="6"
                                required
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className="form__group form__group--full">
                            <Button
                                type="submit"
                                className="form__submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </Button>
                        </div>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="form__message form__message--success">
                                🚀 Thanks for reaching out! We'll be in touch within 24 hours.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="form__message form__message--error">
                                Something went wrong. Please try again or email us directly at hello@atum.digital
                            </div>
                        )}
                    </form>
                </Card>
            </div>
        </section>
    )
}