import { defineConfig } from 'dumi';

export default defineConfig({
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  plugins: ['./umi-plugin'],
  exportStatic: {
    extraRoutePaths: ['/'],
  },
  favicons: [
    'https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/logo.png',
  ],
  themeConfig: {
    name: 'AI 0x0',
    prefersColor: { default: 'dark', switch: false },
    logo: 'https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/logo.png',
    github: 'https://github.com/mushan0x0/ai0x0.com',
  },
});
