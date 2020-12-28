/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

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

interface IUserScoreProps {
  time: string;
  percentage: number;
}

const UserScore: FunctionComponent<IUserScoreProps> = ({
  time,
  percentage,
}) => (
  <div css={resultPosition} style={{ top: `50%`, left: `50%` }}>
    <div css={circleResult}>You</div>
    <p css={textResult}>
      {time} minutes
      <br />
      {percentage}% avg accuracy
    </p>
  </div>
);

export default UserScore;
