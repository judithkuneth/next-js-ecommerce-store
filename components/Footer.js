/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import { Logo } from './Logo';

const footerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  display: flex;
  margin: 0px;
  padding: 0px;
  background-color: #fffcf2;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Logo />
      <p>Mariahilfer Str. 159, 1150</p>
      <p>Meiselmarkt Stand J7, 1150</p>
      <p>Anschützgasse 40, 1150</p>
      <p>Webgasse 44, 1060</p>
      <p>Impressum</p>
    </footer>
  );
}
