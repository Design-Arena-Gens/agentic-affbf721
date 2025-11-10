import Head from 'next/head';
import { useMemo, useState } from 'react';

const greetings = [
  'hii',
  'hello there',
  'hey friend',
  'hiya',
  'yo!'
];

const colors = [
  '#2563eb',
  '#7c3aed',
  '#ea580c',
  '#0891b2',
  '#e11d48'
];

function randomFrom(items, exclude) {
  const pool = items.filter((item) => item !== exclude);
  return pool[Math.floor(Math.random() * pool.length)] ?? items[0];
}

export default function Home() {
  const [accent, setAccent] = useState(colors[0]);
  const [greeting, setGreeting] = useState(greetings[0]);

  const accentShadow = useMemo(
    () => `0 30px 60px -15px ${accent}55`,
    [accent]
  );

  return (
    <>
      <Head>
        <title>hii</title>
        <meta name="description" content="a warm web hello" />
      </Head>
      <main style={styles.layout}>
        <section style={{ ...styles.card, boxShadow: accentShadow }}>
          <span style={{ ...styles.badge, backgroundColor: accent }}>live</span>
          <h1 style={{ ...styles.title, color: accent }}>{greeting}</h1>
          <p style={styles.subtitle}>
            This playful splash screen keeps things light—swap the vibe whenever you
            need a tiny boost.
          </p>
          <button
            style={{ ...styles.button, backgroundColor: accent }}
            type="button"
            onClick={() => {
              setAccent((current) => randomFrom(colors, current));
              setGreeting((current) => randomFrom(greetings, current));
            }}
          >
            Shuffle the vibe
          </button>
        </section>
      </main>
    </>
  );
}

const styles = {
  layout: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem',
  },
  card: {
    position: 'relative',
    maxWidth: '420px',
    width: '100%',
    borderRadius: '28px',
    backgroundColor: '#ffffffee',
    border: '1px solid #e2e8f0',
    padding: '3rem 2.5rem',
    textAlign: 'center',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
  },
  badge: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.08em',
    fontSize: '0.65rem',
    color: '#f8fafc',
    padding: '0.5rem 0.9rem',
    borderRadius: '999px',
    boxShadow: '0 12px 25px -15px rgba(15, 23, 42, 0.6)',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    marginBottom: '0.6rem',
  },
  subtitle: {
    color: '#334155',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '2.4rem',
  },
  button: {
    border: 'none',
    color: '#f8fafc',
    fontSize: '1rem',
    fontWeight: 600,
    padding: '0.85rem 1.6rem',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'transform 180ms ease, filter 180ms ease',
  },
};
