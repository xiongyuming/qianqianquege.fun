var router = require('koa-router')()
var user_controller = require('../../app/controller/user_controller')

router.get('/getUser', user_controller.getUser)
router.post('/registerser', user_controller.registerUser)

module.exports = router;