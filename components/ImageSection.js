/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

const imageSectionStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  padding: 10px;
`;
const imageStyles = css`
  position: relative;
  text-align: center;
  color: white;
  margin: 10px;
  img {
    height: 300px;
    border-radius: 5%;
  }
`;

const textInImageStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    color: #fffcf2;
    font-size: 56px;
    font-weight: 500;
    text-align: center;
  }
`;
export function ImageSection() {
  return (
    <section css={imageSectionStyles}>
      <div css={imageStyles}>
        <img src="/bread.jpg" alt="" />
        <div css={textInImageStyles}>
          <h2>Bäckerei</h2>
        </div>
      </div>

      <div css={imageStyles}>
        <img src="/breakfast.jpg" alt="" />
        <div css={textInImageStyles}>
          <h2>Cafe</h2>
        </div>
      </div>

      <div css={imageStyles}>
        <img src="/pie.jpg" alt="" />
        <div css={textInImageStyles}>
          <h2>Konditorei</h2>
        </div>
      </div>
    </section>
  );
}
