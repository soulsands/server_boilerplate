# Express & mongoose REST API Boilerplate in ES6 with Code Coverage 

# Overview

[![Coverage Status](https://coveralls.io/repos/github/soulsands/express-mongoose-es6-rest-api/badge.svg?branch=develop)](https://coveralls.io/github/soulsands/express-mongoose-es6-rest-api?branch=develop)

[原仓库](https://github.com/kunalkapadia/express-mongoose-es6-rest-api)比较老了，很多依赖没更新，在此调整一下。原仓库有说明的不再赘述，只提供更新记录。



# Update

1. 替换istanbul:1.1.0-alpha.1(伊斯坦布尔)为nyc(纽约城)， 并且修改配置为nyc。如果设置husky在每次提交前要通过单元测试，测试率通过了才给提交，那这样的代码就必须是有测试的代码。
2. 添加nodemon，文件变动自动更新。
3. coverall可以记录一些测试代码，但本项目还和travis.ci绑定了，如果要弄的话还得学下这个持续继承的工具。
4. 暂时卸载husky