# Express & mongoose REST API Boilerplate in ES6 with Code Coverage 

# Overview



[![Coverage Status](https://coveralls.io/repos/github/soulsands/server_boilerplate/badge.svg?branch=master)](https://coveralls.io/github/soulsands/server_boilerplate?branch=master)

[![Build Status](https://travis-ci.com/soulsands/server_boilerplate.svg?branch=master)](https://travis-ci.com/soulsands/server_boilerplate)

[原仓库](https://github.com/kunalkapadia/express-mongoose-es6-rest-api)比较老了，很多依赖没更新，在此调整一下。原仓库有说明的不再赘述，只提供更新记录。



# Update

1. 替换istanbul:1.1.0-alpha.1(伊斯坦布尔)为nyc(纽约城)， 并且修改配置为nyc。如果设置husky在每次提交前要通过单元测试，测试率通过了才给提交，那这样的代码就必须是有测试的代码。
2. 添加nodemon，文件变动自动更新。
3. coverall可以记录一些测试结果，和nyc集成的话可以看下[这个页面](https://github.com/istanbuljs/nyc/blob/HEAD/docs/setup-coveralls.md)。当前项目已配置好，如果是私有项目则需要添加环境变量。目前有免费的。测试完成后可以生成badge徽章，很多GitHub上的框架都会显示。
4. 修改travis.ci配置文件，这是个持续集成的工具，可以监听GitHub项目的推送，之后可以进行自动测试和部署。目前有免费的。提供徽章。
5. 暂时卸载husky
6. 去除codeclimate配置文件，代码质量分析功能，但用的引擎是eslint，通过vscode好好配置，应该不需要这个。
7. 更新mocha。
8. commitizen要研究一下