import React, { useContext } from 'react';
import css from '../styles/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengeContext';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={css.profileContainer}>
      <img src="https://github.com/williamdlm.png" alt="William Mota" />
      <div>
        <strong>William Mota</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
