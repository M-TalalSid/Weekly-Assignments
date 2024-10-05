import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Burger Haven</h1>
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
        <section className={styles.hero}>
          <h2>Welcome To The Best Burger In Town!</h2>
          <p>Enjoy Our Mouth-Watering Burgers, Made With The Freshest and Purest Ingredients & A Whole Lot Of Love. Browse Our Menu & Order Today!</p>
          <img src="./burger1.jpg" alt='Delicious Burger' className={styles.burger1}></img>
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
