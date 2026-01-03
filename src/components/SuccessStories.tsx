import { useState, useEffect, useCallback } from 'react';
import styles from './SuccessStories.module.css';

const IMAGES = {
  testimonial159k: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmuRBweNTqEfkda2LnZQ7zCG3cYI156OWg9XxD',
  testimonial9976: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4Am3jTOl2zshnwOWGmPbL2VRdZNuF8BKvjxkISJ',
  testimonial9900: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmTDh7mufeGTv1hAgHoyLJKdcnia4FrYkujD2e',
  googleReview38k: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4Amqh0dGJCnzyY0ThbLSQ9fwpUtI6B4asHuAPjq',
  googleReview2: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmRQqBHfwoMnP2TZOuEWzx4f3Hy50dgC9vDRYw',
  googleReview3: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmxfeueNZe4Amh62RnP0BfE5MV8zruQvFHtOIy',
  googleReview37k: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmSIKbj2vH6fchTLPYVXuoBOQ5j8eg4b3FApiD',
  googleReviewOIC: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmD3lnQcxiUOYlh5VJ1ZsLPmQF2a6gwj9Ac0uI',
  googleReview6: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmizOi9pKQQzftqmOyWIgrYF9TMlHVs5S6ha32',
};

export default function SuccessStories() {
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const googleReviews = [
    { src: IMAGES.googleReview38k, alt: 'Google review - $38k saved' },
    { src: IMAGES.googleReview37k, alt: 'Google review - $37k saved' },
    { src: IMAGES.googleReviewOIC, alt: 'Google review - Offer in Compromise success' },
    { src: IMAGES.googleReview2, alt: 'Google review' },
    { src: IMAGES.googleReview3, alt: 'Google review' },
    { src: IMAGES.googleReview6, alt: 'Google review' },
  ];

  const openModal = (index: number) => {
    setModalImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setModalImageIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrevious = useCallback(() => {
    if (modalImageIndex !== null) {
      const newIndex = modalImageIndex === 0 ? googleReviews.length - 1 : modalImageIndex - 1;
      setModalImageIndex(newIndex);
    }
  }, [modalImageIndex, googleReviews.length]);

  const goToNext = useCallback(() => {
    if (modalImageIndex !== null) {
      const newIndex = modalImageIndex === googleReviews.length - 1 ? 0 : modalImageIndex + 1;
      setModalImageIndex(newIndex);
    }
  }, [modalImageIndex, googleReviews.length]);

  useEffect(() => {
    if (modalImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImageIndex, closeModal, goToPrevious, goToNext]);

  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <h2 className={styles.successTitle}>
          We Helped Clients Save{' '}
          <span className={styles.successHighlight}>$9,900</span>,{' '}
          <span className={styles.successHighlight}>$37,000</span> and even{' '}
          <span className={styles.successHighlight}>$159,000</span>
        </h2>
        <p className={`${styles.sectionSubtitle} ${styles.sectionSubtitleLight}`}>
          Real results from real clients
        </p>

        <div className={styles.testimonialsGrid}>
          <article className={styles.testimonialCard}>
            <img
              src={IMAGES.testimonial159k}
              alt="Client saved $159,000 in tax debt"
              className={styles.testimonialImage}
              loading="lazy"
            />
          </article>
          <article className={styles.testimonialCard}>
            <img
              src={IMAGES.testimonial9976}
              alt="Client saved $9,976 in tax debt"
              className={styles.testimonialImage}
              loading="lazy"
            />
          </article>
          <article className={styles.testimonialCard}>
            <img
              src={IMAGES.testimonial9900}
              alt="Client saved $9,900 in tax debt"
              className={styles.testimonialImage}
              loading="lazy"
            />
          </article>
        </div>

        <h3 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`} style={{ marginTop: '3rem', fontSize: '1.5rem' }}>
          What Our Clients Say on Google
        </h3>

        <div className={styles.googleReviewsGrid}>
          {googleReviews.map((review, index) => (
            <article
              key={index}
              className={styles.googleReviewCard}
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(index);
                }
              }}
            >
              <img
                src={review.src}
                alt={review.alt}
                className={styles.googleReviewImage}
                loading="lazy"
              />
            </article>
          ))}
        </div>

        {modalImageIndex !== null && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.modalClose}
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>
              <button
                className={styles.modalNavButton}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <img
                src={googleReviews[modalImageIndex].src}
                alt={googleReviews[modalImageIndex].alt}
                className={styles.modalImage}
              />
              <button
                className={`${styles.modalNavButton} ${styles.modalNavButtonRight}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Next image"
              >
                ›
              </button>
              <div className={styles.modalCounter}>
                {modalImageIndex + 1} / {googleReviews.length}
              </div>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <a href="/#contact" className={styles.ctaButton}>
            Apply To See If You Qualify
          </a>
          <p className={styles.ctaSubtext}>100% Complimentary Consultation. No Commitments.</p>
        </div>
      </div>
    </section>
  );
}
