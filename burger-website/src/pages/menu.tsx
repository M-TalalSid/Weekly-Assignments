import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Menu() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Our Menu</h1>
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
        <h2>Our Burger Flavors</h2>
        <ul className={styles.menuList}>
            <li>Classic Beef Burger - $8</li>
            <li>Classic Veggie Burger - $8</li>
            <li>Classic CheeseBurger - $8</li>
            <li>Cheese Burst Burger - $9.50</li>
            <li>Cheesy Bacon Burger - $10</li>
            <li>Spicy Jalapeño Burger - $10</li>
            <li>BBQ Chicken Burger - $8.50</li>
            <li>BBQ Bacon Burger - $9.50</li>
            <li>Vegan Mushroom Burger - $7</li>
            <li>Vegan Delight Burger - $7</li>
            <li>Double Patty Delight - $13</li>
            <li>Zinger Cheese Burger - $11.50</li>
            <li>Crispy Onion Burger - $6.50</li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Burger Haven. All Rights Reserved.
                  Privacy Policy | Terms & Conditions.
                  Made By Talal Shoaib.</p>
      </footer>
    </div>
  );
}
