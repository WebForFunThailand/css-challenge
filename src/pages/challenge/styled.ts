import { css } from '@emotion/react';

export const EditorLayout = css`
  display: grid;
  grid-template-areas: 'expect user' 'html css';
  grid-gap: 8px;
`;

export const ExpectedResultSection = css`
  grid-area: expect;
  color: #777;
  font-weight: 500;

  > span {
    display: block;
    margin-bottom: 4px;
  }

  > #expectedCanvas {
    display: block;
    min-width: 25vw;
    min-height: 25vw;
    border: 1px #777 solid;
  }
`;

export const UserResultSection = css`
  grid-area: user;
  color: #777;
  font-weight: 500;
  position: relative;

  > span {
    display: block;
    margin-bottom: 4px;
  }

  > .userDivContainer {
    position: absolute;
    opacity: 0;

    > .userDivElement {
      width: 150px;
      height: 150px;
      background: white;
      display: inline-block;
    }
  }

  > img {
    display: block;
    width: 25vw;
    height: 25vw;
    border: 1px #777 solid;
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

export const baseButtonStyle = css`
  cursor: pointer;
  padding: 15px 40px;
  border-radius: 7px;
  border-width: 0;
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
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
    background: rgba(14, 104, 248, 0.2);
  }
`;
