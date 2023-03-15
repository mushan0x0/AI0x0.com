import axios from 'axios';
import YAML from 'yaml';

const platform = navigator.platform.toLowerCase();
const osName = /win/.test(platform)
  ? 'win'
  : /mac/.test(platform)
  ? 'mac'
  : 'linux';

const oss = 'https://ai0x0-track.oss-cn-beijing.aliyuncs.com';

// 获取 Git 仓库最新版本信息
async function getLatestVersion(): Promise<string> {
  const response = await axios.get(
    `${oss}/versions/latest${osName === 'mac' ? '-mac' : ''}.yml`,
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
  if (osName === 'win') {
    alert(
      '目前是公测阶段，win程序会提示有风险！欢迎点击网页下方与我联系，获取更多新版信息！',
    );
  } else {
    alert(
      '即将开始下载，目前是公测阶段，点击网页下方与我联系，获取更多新版信息！',
    );
  }
}

// 示例用法
export async function downloadLatestPackage() {
  if (!['mac', 'win'].includes(osName)) {
    alert(
      '暂不支持您的系统，您的系统即将上线，可以点击网页下方与我联系参与内测！',
    );
    return '';
  }
  const version = (await getLatestVersion()).replace('v', '');
  const downloadUrls = {
    // win: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}.exe`,
    // mac: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}.dmg`,
    // linux: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}-linux-x64.tar.gz`,
    win: `${oss}/versions/AI%200x0_${version}.exe`,
    mac: `${oss}/versions/AI%200x0_${version}.dmg`,
    // linux: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}-linux-x64.tar.gz`,
  };
  const downloadLink = getDownloadLink(downloadUrls);
  if (!downloadLink) return;
  downloadFile(downloadLink);
}
