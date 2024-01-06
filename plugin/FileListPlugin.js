// 是一个构造函数的形式
module.exports = class FileListPlugin {
  constructor(filename = "") {
    // 传过来的文件名
    this.filename = filename;
  }
  // 必须有一个apply 且apply周期只执行一次 无论内容是否更改 除非重新npm run build 让webpack重新执行
  // apply(compiler) {
  //  compiler.hooks.事件名称.事件类型(name, function(compliation){})
  //   console.log(123123);
  // }

  apply(compiler) {
    // tap是个库 调用webpack 中的方法
    // 这里回调用用箭头函数 因为用到了this
    compiler.hooks.emit.tap("FileListPlugin", (compliation) => {
      // compliation.assets 访问本次打包生成所有文件的结果
      let filelist = [];
      for (let key in compliation.assets) {
        const content = `${key}
         大小: ${compliation.assets[key].size() / 1000}KB
         `;

        filelist.push(content);
      }

      // filelist.sort((a, b) => {
      // const sizeA = a.split("大小:")[1]?.trim()?.replace("KB", "");
      // const sizeB = b.split("大小:")[1]?.trim()?.replace("KB", "");
      //   // 简写 从小到大排序
      //   return sizeA - sizeB;
      //   // 耗时：webpack 5.89.0 compiled with 3 warnings in 2459 ms
      // });

      filelist = this.mergesort(filelist);

      const str = filelist.join("\n");
      // 把这个值重新赋值给 compliation.assets
      compliation.assets[this.filename] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }

  mergesort(arr) {
    if (arr.length === 1) return arr;

    const mid = arr.length >> 1;
    const left = this.mergesort(arr.slice(0, mid));
    const right = this.mergesort(arr.slice(mid));

    return this.merge(left, right);
  }

  merge(left, right) {
    let res = [];
    while (left.length && right.length) {
      const sizeA = left[0].split("大小:")[1]?.trim()?.replace("KB", "");
      const sizeB = right[0].split("大小:")[1]?.trim()?.replace("KB", "");

      if (sizeA < sizeB) {
        res.push(left.shift());
      }
      if (sizeA > sizeB) {
        res.push(right.shift());
      }
    }
    return [...res, ...left, ...right];
  }
};
