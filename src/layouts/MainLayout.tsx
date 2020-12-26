/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { jsx, css } from '@emotion/react';

const logo = `https://webforfun.dev/static/40ea6582af50f3afb237931d3dd76e72/47203/logo.webp`;

// style

const container = css`
  display: grid;
  margin-left: 40px;
  margin-top: 40px;
  grid-template-columns: 25% 60% auto;
`;

const imageStyle = css`
  width: 200px;
`;

const titleStyle = css`
  color: #555555;
  font-size: 20px;
  margin: 20px 0;
`;

const resetMargin = css`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const linkStyle = css`
  font-size: 20px;
  & > a {
    color: rgba(14, 104, 248, 1);
    display: block;
    margin: 10px 0;
    text-decoration: none;
  }
`;

const footerStyle = css`
  margin-top: 50px;
  text-align: center;
  color: #777777;
  font-size: 18px;
`;

const childrenStyle = css`
  min-height: 85vh;
`;

export const MainLayout: FunctionComponent = ({ children }) => (
  <>
    <div css={container}>
      <div>
        <img src={logo} css={imageStyle} alt="Web For Fun" />
        <div css={titleStyle}>
          <p css={resetMargin}>#10mins</p>
          <p css={resetMargin}>CSSChallenge</p>
        </div>
        <div css={linkStyle}>
          <a href="https://webforfun.dev/">Web For Fun #2</a>
          <a href="https://webforfun.dev/">DEV.to Article</a>
          <a href="https://github.com/WebForFunThailand/css-challenge">
            Github Repository
          </a>
        </div>
      </div>
      <div>
        <div css={childrenStyle}>{children}</div>
        <footer css={footerStyle}>Copyright © 2020 Web For Fun</footer>
      </div>
    </div>
  </>
);
