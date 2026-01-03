import styles from './Footer.module.css';

const IMAGES = {
  logo: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmstJbNPhcYA5KZCWdugMRDEPm3VrOypoLjnea',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <img src={IMAGES.logo} alt="Tax Debt Services" className={styles.footerLogo} loading="lazy" />
      <p className={styles.footerText}>
        © {currentYear} Tax Debt Services. All rights reserved.
      </p>
      <nav className={styles.footerLinks}>
        <a href="https://taxdebtservices.com/privacy-policy/" className={styles.footerLink}>Privacy Policy</a>
      </nav>
    </footer>
  );
}
