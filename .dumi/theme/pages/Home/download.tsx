import axios from 'axios';

// 获取 Git 仓库最新版本信息
async function getLatestVersion(repoUrl: string): Promise<string> {
  const response = await axios.get(
    `https://api.github.com/repos/${repoUrl}/releases/latest`,
  );
  return response.data.tag_name;
}

// 获取适合当前平台的下载链接
function getDownloadLink(downloadUrls: Record<string, string>): string {
  const platform = navigator.platform.toLowerCase();
  const osName = /win/.test(platform)
    ? 'win'
    : /mac/.test(platform)
    ? 'mac'
    : 'linux';
  if (osName === 'linux') {
    alert('暂不支持linux，敬请期待');
    return '';
  }

  return downloadUrls[osName];
}

// 下载文件
function downloadFile(url: string): void {
  const a = document.createElement('a');
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 示例用法
export async function downloadLatestPackage() {
  const repoUrl = 'mushan0x0/ai0x0.com';
  const version = (await getLatestVersion(repoUrl)).replace('v', '');
  const downloadUrls = {
    // win: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}.exe`,
    // mac: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}.dmg`,
    // linux: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}-linux-x64.tar.gz`,
    win: `https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/versions/AI-0x0_${version}.exe`,
    mac: `https://bojuematerial-prudcut-public.oss-cn-guangzhou.aliyuncs.com/other/versions/AI-0x0_${version}.dmg`,
    // linux: `https://github.com/${repoUrl}/releases/download/${version}/AI-0x0_${version.replace('v', '')}-linux-x64.tar.gz`,
  };
  const downloadLink = getDownloadLink(downloadUrls);
  if (!downloadLink) return;
  downloadFile(downloadLink);
}
