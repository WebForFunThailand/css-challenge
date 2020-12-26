/** @jsxRuntime classic */
/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx, css } from '@emotion/react';

const logo = `https://webforfun.dev/static/40ea6582af50f3afb237931d3dd76e72/47203/logo.webp`;

const imageStyle = css`
  max-height: 30vh;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;
  margin: 30px auto;
  display: block;
  &:hover {
    opacity: 1;
  }
`;

const containerStyle = css`
  margin: 40px auto;
  width: 80vw;
`;

const childrenStyle = css`
  min-height: 50vh;
`;

const footerStyle = css`
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
  color: #777777;
`;

export const MobileLayout: FunctionComponent = ({ children }) => (
  <div css={containerStyle}>
    <img src={logo} css={imageStyle} alt="Web For Fun" />
    <div css={childrenStyle}>{children}</div>
    <footer css={footerStyle}>Copyright © 2020 Web For Fun</footer>
  </div>
);
