import { useEffect } from 'react';
import styles from './CallPage.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CallPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header hideCtaButton={true} />
      <main className={styles.main}>
        <section className={styles.surveySection}>
          <div className={styles.container}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/fx8UZPnl36uP3IabKjGE"
              style={{ border: 'none', width: '100%' }}
              scrolling="no"
              id="fx8UZPnl36uP3IabKjGE"
              title="survey"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
