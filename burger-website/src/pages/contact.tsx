import Link from 'next/link';
import styles from '../styles/Home.module.css';

const iframeProps = {
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.6816352383931!2d-76.2717589!3d36.75290849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89baa5731e157f19%3A0xbe2e6491bce9f790!2sBurger%20Haven!5e1!3m2!1sen!2s!4v1727887018605!5m2!1sen!2s",
  width: "600",
  height: "400",
  style: { border: 1 },
  allowFullScreen: "true",
  loading: "lazy",
  referrerPolicy: "no-referrer",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
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
          <h2>Get in Touch</h2>
          <p>Email: contact@burgerhaven.com</p>
          <p>Phone: +123 456 7890</p>

          <h3>Visit Us:</h3>
          <div className={styles.mapContainer}>
            <iframe
              src={iframeProps.src}
              width={iframeProps.width}
              height={iframeProps.height}
              style={iframeProps.style}
              allowFullScreen={iframeProps.allowFullScreen}
              loading={iframeProps.loading}
              referrerPolicy={iframeProps.referrerPolicy}
            />
          </div>
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
