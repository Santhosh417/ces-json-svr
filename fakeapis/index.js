const courses = require('./course.json');
const students = require('./student.json');
const enrollments = require('./enrollment.json');
const users = require('./users.json');
// Something more

module.exports = () => ({
  courses: courses.courses,
  students: students.students,
  enrollments: enrollments.enrollments,
  users:users.users
});
