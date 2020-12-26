/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts/MainLayout';
import { Header } from '@/components/Header';
import { NextPage } from 'next';
import { useState, useEffect } from 'react';

// style
const subTtitleStyle = css`
  color: #555555;
  width: 600px;
  margin: auto;
  font-size: 1.2rem;
`;

const challengeButtonStyle = css`
  cursor: pointer;
  background-color: rgba(246, 126, 4, 0.1);
  color: rgb(246, 126, 4);
  padding: 10px 60px;
  border-radius: 7px;
  border-width: 0;
  margin: 5% auto;
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Home: NextPage = () => {
  const router = useRouter();

  const onClickToChallenge = () => {
    router.push(`/challenge`);
  };

  return (
    <MainLayout>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header />
          <div css={subTtitleStyle}>
            <div>
              <br />
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/_0s8qXRCY4Y"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <p
              css={css`
                margin-top: 1em;
                text-align: center;
              `}
            >
              Recommended playing this game on a computer device
            </p>
          </div>
          <button
            css={challengeButtonStyle}
            type="button"
            onClick={onClickToChallenge}
          >
            PLAY THE CHALLENGE
          </button>
        </main>
      </div>
    </MainLayout>
  );
};

export default Home;
