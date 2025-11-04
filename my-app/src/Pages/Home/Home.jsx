import React from 'react';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>The Exquisite Eatery</h1>
          <p>An unforgettable experience in fine dining.</p>
        </div>
      </header>
    </div>
  );
};

export default HomePage;