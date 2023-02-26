const ignoreList = [];
const fileNameValidator = (files, regExp, message) => {
  let error;
  files.forEach((filePath) => {
    const fileNameArr = filePath.split(/[\/\\]/);
    const fileName = fileNameArr[fileNameArr.length - 1];
    // 用横线分割命名文件，禁止用驼峰
    if (
      !ignoreList.some((i) => filePath.includes(i)) &&
      regExp.test(fileName)
    ) {
      error = Error(message.replace('{fileName}', fileName));
    }
  });
  if (error) {
    console.log(error);
  } else {
    return 'echo'; // 必须要返回一个命令，不然下面的不会执行
  }
};
module.exports = {
  '*': [
    'pretty-quick --staged',
    // 禁止使用样式文件，只能使用css-in-js
    (files) =>
      fileNameValidator(
        files,
        /\.(less|scss|css)/,
        'Please delete {fileName} and use css-in-js instead.',
      ),
    // 文件名驼峰校验
    // (files) =>
    //   fileNameValidator(
    //     files,
    //     /[A-Z][a-z]/,
    //     "Please split the {fileName} file name with horizontal lines."
    //   ),
  ],
  '*.{ts,tsx,js}': ['eslint', 'bash -c tsc'],
};
