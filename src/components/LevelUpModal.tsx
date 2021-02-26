import React, { useContext } from 'react';
import css from '../styles/components/LevelUpModal.module.css';
import { ChallengesContext } from '../contexts/ChallengeContext';

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <header>{level}</header>
        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div>
  );
}
