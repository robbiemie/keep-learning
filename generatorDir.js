const fs = require('fs');
const path = require('path');

// 递归遍历目录函数
function readDirSync(dir, prefix = '') {
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    // 判断是不是最后一个文件或目录，以便适当地显示分支或角落
    if(file.match('png')) return
    const isLast = index === files.length - 1;
    const localDir = path.join(dir, file);
    const stats = fs.statSync(localDir);
    if (stats.isDirectory()) {
      console.log(`${prefix}${isLast ? '└─' : '├─'}${file}`);
      // 如果是目录，递归调用，并更新前缀
      readDirSync(localDir, `${prefix}${isLast ? '    ' : '|   '}`);
    } else {
      console.log(`${prefix}${isLast ? '└─' : '├─'}${file}`);
    }
  });
}

// 开始遍历当前目录
console.log(path.basename(process.cwd()));
readDirSync(process.cwd() + '/docs');
