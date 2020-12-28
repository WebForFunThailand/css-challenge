/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Head from 'next/head';
import { NextPage } from 'next';
import MessageBox from '@/components/Message';
import SummaryMessageBox from '@/components/SummaryMessage';
import UserScore from '@/components/UserScore';
import { MainLayout } from '@/layouts/MainLayout';
import { getScoreById } from '@/services/firebase';

const graphStyle = css`
  width: 600px;
  display: block;
  margin: 0 auto;
  margin-top: -20px;
  position: relative;
`;

const badgeStyle = css`
  font-weight: bold;
  color: #ee1466;
`;

const badgeLabelStyle = css`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
`;

const graphAxis = css`
  position: absolute;
  font-size: 1.4rem;
  font-weight: bold;
  color: #555;

  &:nth-of-type(1) {
    left: 50%;
    transform: translateX(-50%);
  }
  &:nth-of-type(2) {
    top: calc(50% - 1.4rem / 2 - 7px);
    left: 40px;
  }
`;

interface ISummaryPage {
  name: string;
  percentage: number;
  rankPercentage: number;
  time: string;
}

const Summary: NextPage<ISummaryPage> = ({
  name,
  percentage,
  rankPercentage,
  time,
}) => {
  const seoInfo = {
    title: `You are ${name}`,
    description: `10 Minutes CSS Challenge is a game developed for the developer who has writing skills in CSS or interested in it. For this challenge, you’ll get an image and your job is to write CSS to be exactly same design as that image.`,
    image: `https://webforfun.dev/static/40ea6582af50f3afb237931d3dd76e72/47203/logo.webp`,
    cardLabel: `CSS Challenge Web for fun`,
    website: `https://webforfun.dev/`,
  };

  return (
    <MainLayout>
      <div className="container">
        <Head>
          <title>Summary</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seoInfo.website} />
          <meta property="og:title" content={seoInfo.title} />
          <meta property="og:description" content={seoInfo.description} />
          <meta property="og:image" content={seoInfo.image} />

          <meta property="twitter:card" content={seoInfo.cardLabel} />
          <meta property="twitter:url" content={seoInfo.website} />
          <meta property="twitter:title" content={seoInfo.title} />
          <meta property="twitter:description" content={seoInfo.description} />
          <meta property="twitter:image" content={seoInfo.image} />
        </Head>
        <main>
          <MessageBox
            title="Web For Fun #2 is now open for registration!"
            description="10 Minutes CSS Challenge is a game developed for the developer who has writing skills in CSS or interested in it. For this challenge, you’ll get an image and your job is to write CSS to be exactly same design as that image."
          />
          <p css={badgeLabelStyle}>
            You’re a <span css={badgeStyle}>CSS Wizard</span>
          </p>
          <div
            css={css`
              position: relative;
              transform: scale(0.9);
            `}
          >
            <img alt="graph" src="../../graph.svg" css={graphStyle} />
            <div css={graphAxis}>Accuracy</div>
            <div css={graphAxis}>Time</div>
            <UserScore time={time} percentage={percentage} />
          </div>
          <SummaryMessageBox
            rankPercentage={rankPercentage}
            time={time}
            percentage={percentage}
          />
        </main>
      </div>
    </MainLayout>
  );
};

Summary.getInitialProps = async ({ query }): Promise<ISummaryPage> => {
  const id = query.id as string;
  const result = await getScoreById(id);
  return result;
};
export default Summary;
