/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

const Title: FunctionComponent = () => (
  <div>
    <p
      css={css`
        color: red;
      `}
    >
      Base Component
    </p>
  </div>
);

export default Title;
