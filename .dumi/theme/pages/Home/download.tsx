import axios from 'axios';
import YAML from 'yaml';

const platform = navigator.platform.toLowerCase();
const osName = /win/.test(platform)
  ? 'win'
  : /mac/.test(platform)
  ? 'mac'
  : 'linux';

// 获取 Git 仓库最新版本信息
async function getLatestVersion(): Promise<string> {
  const response = await axios.get(
    `https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/versions/latest-${osName}.yml`,
  );
  return YAML.parse(response.data).version;
}

// 获取适合当前平台的下载链接
function getDownloadLink(downloadUrls: Record<string, string>): string {
  return downloadUrls[osName];
}

// 下载文件
function downloadFile(url: string): void {
  const a = document.createElement('a');
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  alert('即将开始下载，可以点击网页下方与我联系参与更多功能内测！');
}

// 示例用法
export async function downloadLatestPackage() {
  if (osName !== 'mac') {
    alert(
      '目前仅支持Mac，您的系统即将上线，可以点击网页下方与我联系参与内测！',
    );
    return '';
  }
  const version = (await getLatestVersion()).replace('v', '');
  const downloadUrls = {
    // win: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}.exe`,
    // mac: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}.dmg`,
    // linux: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}-linux-x64.tar.gz`,
    win: `https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/versions/AI%200x0_${version}.exe`,
    mac: `https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/versions/AI%200x0_${version}.dmg`,
    // linux: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}-linux-x64.tar.gz`,
  };
  const downloadLink = getDownloadLink(downloadUrls);
  if (!downloadLink) return;
  downloadFile(downloadLink);
}
