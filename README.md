### 利用脚手架创建命令

npm install -g create-react-app // 全局安装 create-react-app (只需要安装一次)

create-react-app 【自己起一个项目名称】 // 创建项目

cd 【自己起的项目名称】 // 进入项目目录

### `npm run dev `

只有这个命令可以正确执行 其他的都会报错 不知道为什么 反正就是测试用的 也无所谓
npm run build 可以执行测试的 loader

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 安装 webpack 配置文件

csdn 原作者链接: [https://blog.csdn.net/dhq_blog/article/details/124696433](https://blog.csdn.net/dhq_blog/article/details/124696433)

### 自己写一个 plugin 插件

1. 创建 plugin 插件 FileListPlugin.js
2. 在 webpack.config.js 里面注册我们刚才写的插件

```
plugins: [
    new FileListPlugin("文件列表.md"),
  ],
```

3. 写插件:[https://blog.csdn.net/Android_boom/article/details/129138764](https://blog.csdn.net/Android_boom/article/details/129138764)

4. 稳定用归并 不稳定用 sort ，时间复杂度是一样的
5. b 站讲解链接:[https://www.bilibili.com/video/BV1b24y1N755/?spm_id_from=333.999.0.0&vd_source=65c629fe884570372cdf68ade5a56e2e](https://www.bilibili.com/video/BV1b24y1N755/?spm_id_from=333.999.0.0&vd_source=65c629fe884570372cdf68ade5a56e2e)
