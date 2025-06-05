import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NA’iF AI – Superhuman Engineer Platform</title>
        <meta name="description" content="From Zero to Hero – Build Web & Mobile Apps via Chat" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to NA’iF AI</h1>
        <p>Your Superhuman Full Stack Engineer</p>
        <Link href="/chat">
          <button>Launch AI Chat Builder</button>
        </Link>
        <Link href="/dashboard">
          <button>User Dashboard</button>
        </Link>
      </main>
    </div>
  );
}