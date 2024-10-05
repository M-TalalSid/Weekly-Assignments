import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section>
          <h2>Our Story</h2>
          <p>Founded in 2023, Burger Haven Is Known For Its Mouth-Watering & Fresh Gourmet Burgers.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Burger Haven. All Rights Reserved.
                  Privacy Policy | Terms & Conditions.
                  Made By Talal Shoaib.</p>
      </footer>
    </div>
  );
}
