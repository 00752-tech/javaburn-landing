import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Java Burn - Natural Coffee Enhancement for Weight Loss</title>
        <meta name="description" content="Discover Java Burn, the science-backed coffee enhancement that helps you burn fat and boost metabolism naturally." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Java Burn</a>
        </h1>

        <p className={styles.description}>
          Transform Your Body Naturally with Our Science-Backed Coffee Enhancement
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Natural Fat Burning &rarr;</h2>
            <p>Our patent-pending formula helps activate your body's natural fat-burning mechanisms.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Increased Energy &rarr;</h2>
            <p>Experience all-day energy without the crashes or jitters of regular supplements.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Metabolism Boost &rarr;</h2>
            <p>Scientifically proven ingredients that help boost your metabolism naturally.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>100% Money-Back Guarantee &rarr;</h2>
            <p>Try Java Burn risk-free with our 60-day money-back guarantee.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          &copy; 2024 Java Burn. All rights reserved.
        </a>
      </footer>
    </div>
  )
}
