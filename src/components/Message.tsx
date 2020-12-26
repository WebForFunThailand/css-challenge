/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

const boxStyle = css`
  background-color: rgba(245, 126, 4, 0.1);
  padding: 20px;
  border-radius: 7px;
`;

const titleStyle = css`
  font-size: 1.2rem;
  color: #f57e04;
  font-weight: bold;
  margin-top: 0;
`;

const descriptionStyle = css`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 28px;
`;

const linkStyle = css`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
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
