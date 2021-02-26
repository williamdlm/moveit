import Head from 'next/head';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import css from '../styles/pages/Home.module.css';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { format } from 'path';
import next from 'next';
import { ChallengesProvider } from '../contexts/ChallengeContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
