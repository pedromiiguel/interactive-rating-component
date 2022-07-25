import React, { ReactNode } from 'react';
import styles from 'styles/card.module.css';

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <article className={styles.card}>{children}</article>;
}
