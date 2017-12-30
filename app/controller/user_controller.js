/**
* 获取用户
*/

exports.getUser = async (ctx, next) => {
  ctx.body = {
    user_name: 'xym',
    age: 30
  }
}

/**
* 注册用户
*/

exports.registerUser = async (ctx, next) => {
  console.log('registerUser' + ctx.request.body)
}