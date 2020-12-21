/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

// style

const containerStyle = css`
  position: relative;
`;

const textCenteredStyle = css`
  font-size: 105px;
  width: 80%;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-left: 20%;
  padding-top: 10%;
`;
const boxStyle = css`
  position: absolute;
  width: 300px;
  height: 300px;
  left: 15%;
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
