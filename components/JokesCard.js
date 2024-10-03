"use client"
import { useState, useEffect } from 'react';
import styles from '../styles/Pages.module.css';
import { Icon } from '@iconify/react';


const JokeCard = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    const response = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=d3db59f25f3c4d5bf3bbeac04eaf', {
      headers: { Accept: 'application/json' }
    });
    const data = await response.json();
    setJoke(data.jokeContent);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={styles.card}>
    {loading ? <div className={styles.spinner}></div> : <p className={styles.paragraph}>{joke}</p>}
    <button
      onClick={fetchJoke}
      className={styles.button}
    >
      <Icon icon="ooui:arrow-next-ltr" />
    </button>
  </div>
  );
};

export default JokeCard;
