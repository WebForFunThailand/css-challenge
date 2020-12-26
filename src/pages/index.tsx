/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import { center } from '../components/style-helper';
import { MainLayout } from '../layouts/MainLayout';
import { MobileLayout } from '../layouts/MobileLayout';
import { Header } from '../components/Header';
import { baseButtonStyle, challengeButtonStyle } from '../components/button';

const IPAD_PRO_WIDTH = 1366;
// style
const subTtitleStyle = css`
  color: #555555;
  width: 600px;
  margin: auto;
  font-size: 1.2rem;
`;

const Home: NextPage = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const onChangeDeviceSize = (height: number, width: number) => {
    if (height > width) {
      if (width <= IPAD_PRO_WIDTH) {
        setIsMobile(true);
        return;
      }
    } else if (width <= IPAD_PRO_WIDTH) {
      setIsMobile(true);
      return;
    }

    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener(`resize`, () => {
      onChangeDeviceSize(window.innerHeight, window.innerWidth);
    });

    onChangeDeviceSize(window.innerHeight, window.innerWidth);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => window.removeEventListener(`resize`, () => {});
  }, []);

  const onClickToChallenge = () => {
    router.push(`/challenge`);
  };

  if (isMobile) {
    return (
      <MobileLayout>
        <div css={subTtitleStyle}>
          <div>
            <br />
            <iframe
              title="learning-youtube"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/_0s8qXRCY4Y"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <p
            css={css`
              margin-top: 1em;
              text-align: center;
              color: #ff0000;
              font-size: 16px;
            `}
          >
            เกมนี้ไม่รองรับการเล่นบนโทรศัพท์มือถือโปรดเปิดเล่นบนคอมพิวเตอร์
          </p>
        </div>
      </MobileLayout>
    );
  }

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
                title="learning-youtube"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/_0s8qXRCY4Y"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
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
