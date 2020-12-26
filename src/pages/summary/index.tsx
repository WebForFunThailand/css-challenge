/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import MessageBox from '../../components/Message';
import SummaryMessageBox from '../../components/SummaryMessage';
import { MainLayout } from '../../layouts/MainLayout';

const graphStyle = css`
  width: 800px;
  display: block;
  margin: 0 auto;
  position: relative;
`;

const badgeStyle = css`
  font-weight: bold;
  color: #ee1466;
  font-size: 40px;
`;

const badgeLabelStyle = css`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
`;

const resultPosition = css`
  position: absolute;
  top: 600px;
  left: 500px;
`;

const circleResult = css`
  color: #ffffff;
  padding: 25px;
  border-radius: 95%;
  background-color: #1168f8;
`;

const textResult = css`
  margin: 35px 0 0 0;
  color: #1168f8;
`;

const Summary: FunctionComponent = () => (
  <MainLayout>
    <div className="container">
      <Head>
        <title>Summary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MessageBox
          title="Web For Fun #2 is now open for registration!"
          description="10 Minutes CSS Challenge is a game developed for the developer who has writing skills in CSS or interested in it. For this challenge, you’ll get an image and your job is to write CSS to be exactly same design as that image."
        />
        <p css={badgeLabelStyle}>
          You’re a <span css={badgeStyle}>CSS Wizard</span>
        </p>
        <img alt="graph" src="./graph.svg" css={graphStyle} />
        <div css={resultPosition}>
          <span css={circleResult}>You</span>
          <p css={textResult}>8:10 minutes 88% avg accuracy</p>
        </div>
        <SummaryMessageBox rankPercentage={11} time="11:30" percentage={75} />
      </main>
    </div>
  </MainLayout>
);

export default Summary;
