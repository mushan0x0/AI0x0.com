import { createGlobalStyle } from 'antd-style';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(p) => p.theme.colorBgLayout};
    width: 100vw;
    overflow-x: hidden;
  }
  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }
  .site-tabs-nav.site-tabs-nav {
    display: none;
  }
  .site-btn-round.site-btn-primary.site-btn-lg {
    width: 200px;
    height: 57px;
    border-radius: 5px;
    font-size: 24px;
  }
`;
