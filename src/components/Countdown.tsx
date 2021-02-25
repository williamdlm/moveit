import React, { useContext } from 'react';
import css from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={css.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button className={css.countdownButton} disabled>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${css.countdownButton} ${css.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={css.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
