import { css } from '@emotion/react';

export const EditorContainer = css`
  display: flex;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 15px;

  & > section {
    width: 100%;
  }
`;

export const EditorLayout = css`
  display: grid;
  grid-gap: 10px;
  grid-template-areas: 'expect user';
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
    background: #f1f1f1;
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
  width: 300px;
`;

export const CssEditorSection = css`
  width: 500px;
`;

export const ActionSection = css`
  text-align: right;
  margin-top: 15px;

  > button:last-of-type {
    margin-left: 10px;
  }
`;
