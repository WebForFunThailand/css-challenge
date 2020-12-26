/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

// style

const containerStyle = css`
  position: relative;
  width: 600px;
  margin: auto;
`;

const textCenteredStyle = css`
  font-size: 4rem;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-top: 3rem;
`;
const boxStyle = css`
  position: absolute;
  width: 150px;
  height: 150px;
  transform: translateX(-50px);
  background: rgba(237, 20, 102, 0.05);
  border-radius: 30px;
`;

export const Header: FunctionComponent = () => (
  <div css={containerStyle}>
    <div css={boxStyle} />
    <p css={textCenteredStyle}>
      10 Minutes
      <br /> CSS Challenge
    </p>
  </div>
);
