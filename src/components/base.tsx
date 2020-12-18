/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const Title: React.FC = () => (
  <div>
    <p
      css={css`
        color: red;
      `}
    >
      Base Component
    </p>
    <p></p>
  </div>
);

export default Title;
