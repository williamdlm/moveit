import React from 'react';
import css from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges() {
  return (
    <div className={css.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}

export default CompletedChallenges;
