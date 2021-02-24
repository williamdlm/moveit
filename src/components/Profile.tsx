import React from 'react';
import css from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={css.profileContainer}>
      <img src="https://github.com/williamdlm.png" alt="William Mota" />
      <div>
        <strong>William Mota</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
