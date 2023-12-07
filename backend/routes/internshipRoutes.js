const express =  require('express');
const { 
    getAllInternshipController, 
    addInternshipController, 
    getInternship 
} = require('../controllers/internshipController');


//Router Object
const router = express.Router();


// routes--

//add | Post - internship

router.post('/add', addInternshipController)


//get | get - internship

router.get('/get-all', getAllInternshipController)



//get | get - internship

router.get('/get/:id', getInternship)


module.exports = router
