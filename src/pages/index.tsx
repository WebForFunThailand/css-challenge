/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts/MainLayout';
import { Header } from '@/components/Header';
import { NextPage } from 'next';
import { baseButtonStyle, challengeButtonStyle } from '@/components/button';
import { center } from '@/components/style-helper';

// style
const subTtitleStyle = css`
  color: #555555;
  width: 600px;
  margin: auto;
  font-size: 1.2rem;
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
          <div css={center}>
            <button
              css={[baseButtonStyle, challengeButtonStyle]}
              type="button"
              onClick={onClickToChallenge}
            >
              PLAY THE CHALLENGE
            </button>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Home;
