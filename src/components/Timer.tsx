/** @jsxRuntime classic */
/** @jsx jsx */
import { CSSProperties, useMemo, useState } from 'react';
import { jsx, css } from '@emotion/react';
import useInterval from '@use-it/interval';

const TimerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 10px;
    top: 0;
    left: 0;
    width: 100%;
  }

  &::before {
    background: #eee;
  }

  &::after {
    background: #f67e04;
    transform-origin: top left;
    transform: scaleX(min(calc(var(--time) / var(--max-time)), 1));
    transition: transform 1s linear;
  }
`;

const TimerTimeStyle = css`
  position: absolute;
  right: 11px;
  top: 22px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #f67e04;
`;

interface TimerProps {
  isTimerPause: boolean;
  maxTime: number;
}

const Timer = ({ isTimerPause, maxTime }: TimerProps) => {
  const [time, setTime] = useState(0);

  useInterval(
    () => setTime((currentTime) => currentTime + 1),
    isTimerPause ? null : 1000,
  );

  const formattedTime = useMemo(() => {
    const second = time % 60;
    const minute = (time - second) / 60;
    return `${minute}:${second < 10 ? `0` : ``}${second}`;
  }, [time]);

  return (
    <div
      css={TimerStyle}
      style={{ '--time': time, '--max-time': maxTime } as CSSProperties}
    >
      <div css={TimerTimeStyle}>{formattedTime}</div>
    </div>
  );
};

export default Timer;
