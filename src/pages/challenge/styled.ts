import { css } from '@emotion/react';

export const EditorLayout = css`
  display: grid;
  grid-gap: 10px;
  grid-template-areas: 'expect user' 'html css';
`;

export const DisplaySection = css`
  color: #777;
  font-weight: 500;

  > span {
    display: block;
    margin-bottom: 4px;
  }

  > img {
    display: block;
    width: calc(400px - 10px / 2);
    height: calc(400px - 10px / 2);
    border: 1px #777 solid;
    user-select: none;
  }
`;

export const ExpectedResultSection = css`
  grid-area: expect;
`;

export const UserResultSection = css`
  grid-area: user;
  position: relative;

  > .userDivContainer {
    position: absolute;
    transform: scale(0);

    > .userDivElement {
      width: 500px;
      height: 500px;
      background: white;
      display: inline-block;
    }
  }
`;

export const HtmlEditorSection = css`
  grid-area: html;
`;

export const CssEditorSection = css`
  grid-area: css;
`;

export const ActionSection = css`
  text-align: right;
  margin-top: 1rem;

  > button:last-of-type {
    margin-left: 1rem;
  }
`;
