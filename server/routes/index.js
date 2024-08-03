const authController = require('../controllers/authController')
const todoController = require('../controllers/todoController')
const authMiddleware = require('../middleware')

const setUpRoutes = ( app )  => {
   app.use('/api/auth', authController);
   app.use(`/api/todos`, authMiddleware, todoController)
   
}


module.exports.setUpRoutes = setUpRoutes;