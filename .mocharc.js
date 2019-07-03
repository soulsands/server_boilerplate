module.exports = {
  //https://mochajs.org/#configuring-mocha-node-js
  // 需要详情查看 npx mocha --help

  //mocha本身会寻找根目录下的test文件夹,看是否有测试文件,如果要指定文件夹,则要在命令里配置

  //一个可爱的猫
  reporter: "nyan",
  //查看全局变量是否泄露
  "check-leaks": true,
  //失败了重试
  retries: 2,
  //提供颜色
  color: true,
  //递归寻找子文件
  recursive: true,
  timeout: 2000,
  "full-trace": true
  //delay:true //延迟测试,暂无需要
};
