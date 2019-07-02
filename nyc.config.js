module.exports = {
  //https://www.npmjs.com/package/nyc#selecting-files-for-coverage
  exclude: ["nyc*.js"],
  //检查所有文件,如果打开了会检查许多没被调用的文件,可以看那些多余文件
  //all: true,
  //设置include可以让路径里的文件被检查,不管有没有被require
  // include:[]
  //默认不会检查node_modules,如果需要检查的话可以激活这个选项,并且配置include和exclude
  //"excludeNodeModules": false
  "check-coverage": true, //检查是否合格,根据threshold,阈值
  statements: 50,
  lines: 50,
  branches: 50,
  functions: 50,
  //https://istanbul.js.org/docs/advanced/alternative-reporters/
  //reporter是提供报告的格式，下面几个基本够了
  reporter: ["text", "text-summary" /*, "lcov" */],
  "report-dir": "./.nyc_coverage",
  //存放临时信息的地方,默认为下
  "temp-dir": "./.nyc_temp_data",
  watermarks: {
    //判断是否健康,两个值分成3端,不同段的颜色从红到绿
    lines: [70, 90],
    functions: [70, 90],
    branches: [70, 90],
    statements: [70, 90]
  },
  //如果结果全满就直接不显示
  "skip-full": true
  //如果有某个方法想要全局忽略,可以直接写方法名
  // "ignore-class-method": "render"
};

//提示:以下是可以让检查忽略的注释,有了这些注释就不会检查特定情况
/* istanbul ignore if */ //ignore the next if statement.
/* istanbul ignore else */ // ignore the else portion of an if statement.
/* istanbul ignore next */ // ignore the next thing in the source-code ( functions, if statements, classes, you name it).
/* istanbul ignore file */ //ignore an entire source-file (this should be placed at the top of the file).

//nyc的检查过程大概是给源代码标识记号,在这里被称为instrument,可以理解为乐谱.其本身执行的是标谱后的代码,如果需要查看这方面代码,可以运行
// npx nyc instrument . ./.nyc_instrument_output

//如果有问题可以   输入命令 npx nyc 查看帮助

//nyc做了缓存机制,只要文件生成的哈希值没有变化,就会找到之前的缓存,并且输出

//提供命令,输出instrument, 并且平时不要输出temp_data
// cover: 打印输出
// cover:report 输出html可以查看各项指标
// cover:code 输出被标谱的代码
