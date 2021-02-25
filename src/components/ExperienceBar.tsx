import React, { useContext } from 'react';
import css from '../styles/components/ExperienceBar.module.css';
import { ChallengesContext } from '../contexts/ChallengeContext';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentBar = Math.round(
    (currentExperience / experienceToNextLevel) * 100
  );

  return (
    <header className={css.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentBar}%` }} />
        <span
          className={css.currentExperience}
          style={{ left: `${percentBar}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
