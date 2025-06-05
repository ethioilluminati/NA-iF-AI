import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NA’iF AI – Superhuman Full Stack Engineer</title>
        <meta name="description" content="From Idea to App – with AI" />
      </Head>
      <main className={styles.main}>
        <h1>👨‍💻 NA’iF AI Infinity Mode</h1>
        <p>Build web & mobile apps with AI, paywall, and dashboards.</p>
        <div className={styles.grid}>
          <Link href="/chat"><a className={styles.card}>⚙️ AI Builder</a></Link>
          <Link href="/dashboard"><a className={styles.card}>📊 Dashboard</a></Link>
          <Link href="/login"><a className={styles.card}>🔐 Login</a></Link>
          <Link href="/pricing"><a className={styles.card}>💳 Pricing</a></Link>
        </div>
      </main>
    </div>
  );
}