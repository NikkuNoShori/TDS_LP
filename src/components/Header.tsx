import styles from './Header.module.css';

const IMAGES = {
  logo: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmstJbNPhcYA5KZCWdugMRDEPm3VrOypoLjnea',
  headerCenter: 'https://oizwp2vdbx.ufs.sh/f/xvvPJ5nZe4AmrddCYEA0iKQfCPA7gOHImoX1LYTUSjGvhaNF',
};

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={IMAGES.logo} alt="Tax Debt Services" className={styles.logo} loading="eager" />
      </a>
      <img src={IMAGES.headerCenter} alt="Center banner" className={styles.headerCenterImage} loading="eager" />
      <a href="/#contact" className={styles.headerCta}>
        Apply To See If You Qualify
      </a>
    </header>
  );
}
