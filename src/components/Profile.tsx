import React, { useContext } from 'react';
import css from '../styles/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengeContext';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={css.profileContainer}>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        alt="William Mota"
      />
      <div>
        <strong>User</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
