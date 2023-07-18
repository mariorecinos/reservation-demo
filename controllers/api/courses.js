const Course = require('../models/course');

module.exports = {
  getAllCourses,
  getCourseById
}

// Controller for retrieving all courses
async function getAllCourses(req, res) {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get courses' });
  }
};

// Controller for retrieving a specific course by ID
async function getCourseById(req, res) {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get course' });
  }
};
