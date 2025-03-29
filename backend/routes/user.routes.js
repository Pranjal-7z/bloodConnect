const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const announcementController = require("../controllers/announcement.controller");

router.post('/signup',[
    body('fullname.firstname')
  .isLength({ min: 3 }) 
  .withMessage('Enter a valid name'),

    body('email').isEmail().withMessage('Enter a valid email'),
    body('password')
    .isLength({ min: 3 }) 
    .withMessage('Enter a valid password'),
    
],userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password')
    .isLength({ min: 3 }) 
    .withMessage('Enter a valid password'),
],userController.loginUser);

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);
router.get('/logout',authMiddleware.authUser,userController.logoutUser);
router.get('/admin/list', userController.getAllDonors);
router.get('/donor', userController.getAllDonors);
router.get('/donors', userController.getAllDonors);
router.delete("/donors/:id", userController.deleteDonor);



router.get("/announcements", announcementController.getAnnouncements);
router.post("/announcements", announcementController.createAnnouncement);

router.delete("/announcements/:id", announcementController.deleteAnnouncement);


module.exports = router;