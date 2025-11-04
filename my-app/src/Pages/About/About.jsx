import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>Our Story</h2>
        <p className={styles.aboutText}>
          Nestled in the heart of the city, The Exquisite Eatery is more than just a restaurant; it's a testament to culinary artistry and timeless tradition. Our journey began with a simple belief: that food should not only nourish the body but also delight the soul. Each dish is a symphony of flavors, crafted with the finest, hand-selected ingredients and a passion for perfection.
        </p>
        <p className={styles.aboutText}>
          We are committed to creating an experience that is as unforgettable as our cuisine. From the elegant ambiance to the impeccable service, every detail is meticulously curated to ensure your visit is a magical escape. We invite you to join us and become part of our story, one exquisite meal at a time.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A professional chef in a formal kitchen" className={styles.image} />
      </div>
    </section>
  );
};

export default About;