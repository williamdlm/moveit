import React, { useContext } from 'react';
import css from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={css.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={css.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={css.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={css.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={css.challengeNotActive}>
          <strong>Finalize um cilo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
