import { css } from '@emotion/react';

export const baseButtonStyle = css`
  cursor: pointer;
  padding: 15px 35px;
  border-radius: 7px;
  border-width: 0;
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
`;

export const skipButtonStyle = css`
  color: rgb(237, 20, 102);
  background: transparent;

  &:hover {
    background: rgba(237, 20, 102, 0.1);
  }
`;

export const submitButtonStyle = css`
  color: rgb(14, 104, 248);
  background: rgba(14, 104, 248, 0.1);

  &:hover {
    background: rgba(14, 104, 248, 0.17);
  }
`;

export const facebookButtonStyle = css`
  color: rgb(14, 104, 248);
  background: rgba(14, 104, 248, 0.1);

  &:hover {
    background: rgba(14, 104, 248, 0.17);
  }
`;

export const challengeButtonStyle = css`
  background-color: rgba(246, 126, 4, 0.1);
  color: rgb(246, 126, 4);

  &:hover {
    background-color: rgba(246, 126, 4, 0.17);
  }
`;
