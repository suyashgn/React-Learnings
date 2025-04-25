import React from 'react';
import styles from './Card.module.css'; // import CSS module

function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export default Card;
