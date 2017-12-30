var dev_env = require('./config.dev')
var prod_env = require('./config.prod')

/**
* 根据不同的NODE_ENV, 输出不同的配置对象
* 默认输出development配置对象
*/
module.exports = {
    development: dev_env,
    production: prod_env
}[process.env.NODE_ENV || 'development']