import Head from 'next/head';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import css from '../styles/pages/Home.module.css';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={css.container}>
      <Head>
        <title>inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
