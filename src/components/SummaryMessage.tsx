/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import { baseButtonStyle, facebookButtonStyle } from './button';

interface ISummaryMessageProps {
  percentage: number;
  rankPercentage: number;
  time: string;
}

const Marked = styled.span`
  font-weight: bold;
  color: #1168f8;
`;

const contentStyle = css`
  font-weight: 100;
  font-size: 30px;
  text-align: center;
`;

const buttonStyle = css`
  display: block;
  margin: 10px auto;
`;

const SummaryMessageBox: FunctionComponent<ISummaryMessageProps> = ({
  percentage,
  time,
  rankPercentage,
}) => (
  <div>
    <p css={contentStyle}>
      You beat this game with an accuracy of <Marked>{percentage} %</Marked> on
      average within <Marked>{time} minutes</Marked> minutes, which puts you in
      the top <Marked>{rankPercentage}%</Marked> of all respondents
    </p>

    <button
      css={[baseButtonStyle, facebookButtonStyle, buttonStyle]}
      type="button"
    >
      SHARE YOUR RESULT ON FACEBOOK
    </button>
  </div>
);
export default SummaryMessageBox;
