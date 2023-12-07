const express = require('express');

const router = express.Router();

const { 
    addApplicationController, 
    getApplicationsController, 
    getByIDApplicationsController 
} = require('../controllers/applicationController');

const isAuthenticatedUser = require('../middleware/auth')
const upload = require('../middleware/upload')



//application - Route

router.route('/add').post( isAuthenticatedUser, upload.single('file'), addApplicationController)


//application-get - Route
router.route('/get/:email').get(isAuthenticatedUser, getApplicationsController)




//application-get - Route
router.get('/get-id/:id', getByIDApplicationsController)
router.route('/get-id/:id').get(isAuthenticatedUser, getByIDApplicationsController)



module.exports = router