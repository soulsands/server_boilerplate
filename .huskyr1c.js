const tasks = arr => arr.join(" && ");
//查看支持的钩子函数可以

//https://git-scm.com/docs/githooks

module.exports = {
  hooks: {
    "pre-commit": tasks(["yarn test"])
    /* "pre-push": "" */
  }
};
