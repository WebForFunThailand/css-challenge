/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

export interface StepperDataInterface {
  id: number;
  status: `idle` | 'skip' | 'done';
}

interface StepperProps {
  data: StepperDataInterface[];
}

const StepperContainer = css`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: -1;
  margin-bottom: 48px;

  &::before {
    content: '';
    position: absolute;
    background: #ddd;
    display: block;
    width: 100%;
    height: 3px;
    top: calc(50% - 1.5px);
  }
`;

const StepperNode = css`
  text-align: center;
  background: #dbe8fe;
  font-weight: bold;
  font-size: 25px;
  color: #0e68f8;
  padding: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0 0 0 0.5vw white;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const statusStyle = {
  idle: css``,
  skip: css`
    color: #777;
    background: #eee;
  `,
  done: css`
    background: #23c274;
    background-image: url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: 50%;
    font-size: 0;
  `,
};

const Stepper: FunctionComponent<StepperProps> = ({ data }) => (
  <div css={StepperContainer}>
    {data.map(({ id, status }, index) => (
      <div key={id} css={[StepperNode, statusStyle[status]]}>
        {index + 1}
      </div>
    ))}
  </div>
);

export default Stepper;
