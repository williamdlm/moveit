import React, { useContext } from 'react';
import css from '../styles/components/CompletedChallenges.module.css';
import { ChallengesContext } from '../contexts/ChallengeContext';

function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={css.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

export default CompletedChallenges;
