import React from 'react';
import styles from './Reservations.module.css';

const Reservations = () => {
  return (
    <section id="reservations" className={styles.reservationsSection}>
      <h2 className={styles.sectionTitle}>Make a Reservation</h2>
      <p className={styles.sectionSubtitle}>Book your table in advance and ensure a delightful dining experience.</p>
      
      <div className={styles.container}>
        <div className={styles.reservationForm}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="guests">Number of Guests</label>
              <input type="number" id="guests" name="guests" min="1" required />
            </div>
            <button type="submit" className={styles.submitButton}>Book Table</button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <h3 className={styles.contactTitle}>Find Us</h3>
          <p>
            **Address:** 123 Culinary Drive, Gourmet City, CA 90210
          </p>
          <p>
            **Phone:** (555) 123-4567
          </p>
          <p>
            **Email:** reservations@exquisiteeatery.com
          </p>
          <div className={styles.map}>
            {/* A simple placeholder for a map */}
            <p>Map goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;