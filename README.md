# Express & mongoose REST API Boilerplate in ES6 with Code Coverage 

# Overview



[![Coverage Status](https://coveralls.io/repos/github/soulsands/server_boilerplate/badge.svg?branch=master)](https://coveralls.io/github/soulsands/server_boilerplate?branch=master)

[![Build Status](https://travis-ci.com/soulsands/server_boilerplate.svg?branch=master)](https://travis-ci.com/soulsands/server_boilerplate)

[原仓库](https://github.com/kunalkapadia/express-mongoose-es6-rest-api)比较老了，很多依赖没更新，在此调整一下。原仓库有说明的不再赘述，只提供更新记录。

更新包的时候如果切换过电脑，要记得重新下载依赖。

总体而言是减少命令，多用配置文件。

supertest是superagent用来测试的版本，抽象了一些api。

# Update

1. 替换istanbul:1.1.0-alpha.1(伊斯坦布尔)为nyc(纽约城)， 并且修改配置为nyc。如果设置husky在每次提交前要通过单元测试，测试率通过了才给提交，那这样的代码就必须是有测试的代码。
2. 添加nodemon，文件变动自动更新。
3. [coverall](https://github.com/istanbuljs/nyc/blob/HEAD/docs/setup-coveralls.md)可以记录一些测试结果，和nyc集成的话可以看下。当前项目已配置好，如果是私有项目则需要添加环境变量。目前有免费的。测试完成后可以生成badge徽章，很多GitHub上的框架都会显示。
4. 修改[travis.ci](https://www.travis-ci.org/)配置文件，这是个持续集成的工具，可以监听GitHub项目的推送，之后可以进行自动测试和部署。目前有免费的。提供徽章。
5. 暂时卸载husky
6. 去除codeclimate配置文件，代码质量分析功能，但用的引擎是eslint，通过vscode好好配置，应该不需要这个。
7. 更新[mocha](https://mochajs.org/)版本，提供js配置文件。
8. 更新[supertest](https://www.npmjs.com/package/supertest)版本。卸载supertest-as-promised，因为本体已经支持promise。
9. 更新[chai](https://www.npmjs.com/package/chai)版本。chai的[api](https://www.chaijs.com/api/bdd/)，有点麻烦，不过写出来看得很清晰。
10. 更新[commitizen](https://www.npmjs.com/package/commitizen)版本。