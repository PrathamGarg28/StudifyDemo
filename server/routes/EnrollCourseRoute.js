// // Import the required modules
// const express = require("express");
// const router = express.Router();

// // Import the Controllers
// const { enrollStudents } = require("../controllers/EnrollCourse");

// // Importing Middlewares
// const { auth, isStudent } = require("../middleware/auth");

// // ********************************************************************************************************
// //                                      Enrollment routes
// // ********************************************************************************************************

// // Enroll a Student in Courses
// router.post("/enroll", auth, isStudent, async (req, res) => {
//   const { courses, userId } = req.body;
//   try {
//     // Call the enrollStudents function
//     await enrollStudents(courses, userId, res);
//     res.status(200).json({
//       success: true,
//       message: "Enrollment successful",
//     });
//   } catch (error) {
//     console.error("Enrollment failed:", error);
//     res.status(500).json({
//       success: false,
//       message: "Enrollment failed",
//       error: error.message,
//     });
//   }
// });
// module.exports = router;

const express = require("express");
const router = express.Router();
const { enrollStudent } = require("../controllers/EnrollCourse");
const { auth, isStudent } = require("../middleware/auth");

router.post("/enroll", auth, isStudent, enrollStudent);

module.exports = router;