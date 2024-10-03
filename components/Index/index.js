import styles from '../../styles/Pages.module.css';
import JokeCard from '../JokesCard';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <JokeCard />
      </main>
    </div>
  );
}
