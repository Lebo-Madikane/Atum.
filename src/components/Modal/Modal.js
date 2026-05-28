'use client';

import { useEffect } from 'react';
import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        // Prevent body scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modal} onClick={onClose}>
            {/* Backdrop */}
            <div className={styles.backdrop} />

            {/* Modal Content */}
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className={styles.closeBtn} onClick={onClose}>
                    ✕
                </button>

                {/* Children (LearnMore component) */}
                {children}
            </div>
        </div>
    );
}