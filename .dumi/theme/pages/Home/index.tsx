// @ts-ignore
import { Helmet } from 'dumi';
import { memo, useEffect, type FC } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import Features from 'dumi-theme-antd-style/dist/components/Features';
import Footer from 'dumi-theme-antd-style/dist/components/Footer';
import Hero from 'dumi-theme-antd-style/dist/components/Hero';
import HeroButton from 'dumi-theme-antd-style/dist/components/Hero/HeroButton';
// @ts-ignore
import Header from 'dumi/theme/slots/Header';

import { antdStyleItems } from './configs';

import { downloadLatestPackage } from './download';

import {
  GithubOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  MailOutlined,
  MessageOutlined,
  QqOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { siteTitleSel, useSiteStore } from 'dumi-theme-antd-style/dist/store';

const footer = [
  {
    title: '社区',
    items: [
      {
        icon: <QqOutlined />,
        title: 'QQ群：575539890',
        // url: 'http://medium.com/ant-design/',
        // openExternal: true,
      },
      {
        icon: <MessageOutlined />,
        title: '讨论',
        url: 'https://github.com/mushan0x0/AI0x0.com/discussions',
        openExternal: true,
      },
    ],
  },
  {
    title: '与我联系',
    items: [
      {
        icon: <WechatOutlined />,
        title: '微信：OTZ-QAQ',
        // url: 'http://medium.com/ant-design/',
        // openExternal: true,
      },
      {
        icon: <MailOutlined />,
        title: '邮箱：mushan0x0@gmail.com',
      },
    ],
  },
  {
    title: '帮助',
    items: [
      {
        icon: <GithubOutlined />,
        title: 'GitHub',
        url: 'https://github.com/mushan0x0/ai0x0.com',
        openExternal: true,
      },
      {
        icon: <HistoryOutlined />,
        title: '更新日志',
        url: 'https://github.com/mushan0x0/ai0x0.com/releases',
        openExternal: true,
        // LinkComponent: Link,
      },

      {
        icon: <IssuesCloseOutlined />,
        title: '讨论',
        url: 'https://github.com/mushan0x0/ai0x0.com/issues',
        openExternal: true,
      },
    ],
  },
];

const Home: FC = memo(() => {
  const siteTitle = useSiteStore(siteTitleSel);

  useEffect(() => {
    const downloadButton = document.querySelector<HTMLDivElement>(
      '.site-btn-round.site-btn-primary.site-btn-lg',
    );
    const fn = async () => {
      if (!downloadButton) return;
      downloadButton.innerText = '下载中';
      downloadButton.style.pointerEvents = 'none';
      await downloadLatestPackage();
      downloadButton.innerText = '下载';
      downloadButton.style.pointerEvents = 'auto';
    };
    if (downloadButton) {
      downloadButton.addEventListener('click', fn);
    }
    return () => {
      if (!downloadButton) return;
      downloadButton.removeEventListener('click', fn);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Flexbox align={'center'} gap={80}>
        <Header />
        <Flexbox gap={40} direction={'horizontal'}>
          <video
            controls
            muted
            autoPlay
            loop
            style={{
              width: 650,
              height: 390,
              borderRadius: 5,
              overflow: 'hidden',
              objectFit: 'cover',
            }}
            src="https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/pc.mov"
          />
          <Center style={{ height: 400 }}>
            <img
              width={200}
              src="https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/logo.png"
              alt=""
            />
            <Hero
              title={'AI <b>0x0</b>'}
              description={'一个AI生成客户端，支持多种语言模型'}
            />
          </Center>
        </Flexbox>
        <HeroButton>下载</HeroButton>
        <Features items={antdStyleItems} />
        <Footer columns={footer} />
      </Flexbox>
    </>
  );
});

export default Home;
