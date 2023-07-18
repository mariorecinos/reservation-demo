const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route for retrieving all courses
router.get('/courses', courseController.getAllCourses);

// Route for retrieving a specific course by ID
router.get('/courses/:id', courseController.getCourseById);

module.exports = router;
