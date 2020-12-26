/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

const boxStyle = css`
  padding: 20px;
  background-color: rgba(245, 126, 4, 0.1);
  margin: 20px auto;
`;

const titleStyle = css`
  font-size: 20px;
  color: #f57e04;
  font-weight: bold;
`;

const descriptionStyle = css`
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
`;

const linkStyle = css`
  font-weight: bold;
  color: #f57e04;
  text-decoration: none;
`;

interface IMessageProps {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

const MessageBox: FunctionComponent<IMessageProps> = ({
  title,
  description,
  linkLabel = `VISIT OUR WEBSITE`,
  link = `https://webforfun.dev/`,
}) => (
  <div css={boxStyle}>
    <p css={titleStyle}>{title}</p>
    <p css={descriptionStyle}>{description}</p>
    <a href={link} css={linkStyle}>
      {linkLabel}
    </a>
  </div>
);

export default MessageBox;
