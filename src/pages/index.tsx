/** @jsxRuntime classic */
/** @jsx jsx */
import { FunctionComponent } from 'react';
import Head from 'next/head';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts/MainLayout';
import { Header } from '@/components/Header';
import { route } from 'next/dist/next-server/server/router';

// style
const subTtitleStyle = css`
  color: #555555;
  text-align: center;
  font-size: 20px;
  width: 60%;
  line-height: 30px;
  margin: auto;
`;

const challengeButtonStyle = css`
  cursor: pointer;
  background-color: rgba(246, 126, 4, 0.1);
  color: rgb(246, 126, 4);
  padding: 10px 60px;
  border-radius: 7px;
  border-width: 0;
  font-size: 23px;
  margin: 5% auto;
  display: block;
`;
const Home: FunctionComponent = () => {
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
            <p>
              10 Minutes CSS Challenge is a game developed for the developer who
              has writing skills in CSS or interested in it. For this challenge,
              you’ll get an image and your job is to write CSS to be exactly
              same design as that image.
            </p>
            <p
              css={css`
                margin-top: 1em;
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
