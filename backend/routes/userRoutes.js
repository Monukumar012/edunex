const express = require('express');
const { 
        registerController, loginController,
        getAllUserController, contactController, logoutController, forgotPassword, resetPassword, getUserDeatilsController, updatePasswordController, updateProfileController
} = require('../controllers/userController');
const isAuthenticatedUser = require('../middleware/auth');

//Router Object
const router = express.Router();


//get-all-user - Route
router.get('/get-all-user', getAllUserController)

//register - Route
router.post('/register', registerController)


//Login - Route
router.post('/login', loginController)


//Login - Route
router.route('/password/forgot').post(forgotPassword)


//Login - Route
router.put('/password/reset/:token', resetPassword)



//Login - Route
router.get('/logout', logoutController)


//User - Deatils
router.route('/me').get(isAuthenticatedUser, getUserDeatilsController)



//User - Change Password
router.route('/password/update').put(isAuthenticatedUser, updatePasswordController)

//User - Change user Deatils
router.route('/me/update').put(isAuthenticatedUser, updateProfileController)


//contact - Route
router.post('/contact', contactController)



module.exports = router