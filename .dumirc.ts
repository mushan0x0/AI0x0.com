import { defineConfig } from 'dumi';

export default defineConfig({
  ...(process.env.NODE_ENV === 'development'
    ? {}
    : {
        ssr: {},
      }),
  plugins: ['./umi-plugin'],
  exportStatic: {
    extraRoutePaths: ['/'],
  },
  favicons: ['https://ai0x0-track.oss-cn-beijing.aliyuncs.com/medias/logo.png'],
  themeConfig: {
    name: 'AI 0x0',
    prefersColor: { default: 'dark', switch: false },
    logo: 'https://ai0x0-track.oss-cn-beijing.aliyuncs.com/medias/logo.png',
    github: 'https://github.com/mushan0x0/ai0x0.com',
  },
});
