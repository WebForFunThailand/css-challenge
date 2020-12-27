/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';
import Head from 'next/head';
import MessageBox from '../../components/Message';
import SummaryMessageBox from '../../components/SummaryMessage';
import { MainLayout } from '../../layouts/MainLayout';

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

const resultPosition = css`
  position: absolute;
`;

const circleResult = css`
  color: #ffffff;
  background-color: #1168f8;
  font-size: 0.8rem;
  width: 35px;
  height: 35px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const textResult = css`
  top: -62px;
  left: 33px;
  position: absolute;
  width: 140px;
  color: #1168f8;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #ddd;
  padding: 5px;
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
        <div
          css={css`
            position: relative;
            transform: scale(0.9);
          `}
        >
          <img alt="graph" src="./graph.svg" css={graphStyle} />
          <div css={graphAxis}>Accuracy</div>
          <div css={graphAxis}>Time</div>
          <div css={resultPosition} style={{ top: '50%', left: '50%' }}>
            <div css={circleResult}>You</div>
            <p css={textResult}>
              8:10 minutes
              <br />
              88% avg accuracy
            </p>
          </div>
        </div>

        <SummaryMessageBox rankPercentage={11} time="11:30" percentage={75} />
      </main>
    </div>
  </MainLayout>
);

export default Summary;
