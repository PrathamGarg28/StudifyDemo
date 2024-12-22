const Course = require("../models/Course")
const CourseProgress = require("../models/CourseProgress")
const User = require("../models/Instructor");
// exports.enrollStudents = async (courses, userId, res) => {
//     if (!courses || !userId) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Please Provide Course ID and User ID" })
//     }
  
//     for (const courseId of courses) {
//       try {
//         // Find the course and enroll the student in it
//         const enrolledCourse = await Course.findOneAndUpdate(
//           { _id: courseId },
//           { $push: { studentsEnroled: userId } },
//           { new: true }
//         )
  
//         if (!enrolledCourse) {
//           return res
//             .status(500)
//             .json({ success: false, error: "Course not found" })
//         }
//         console.log("Updated course: ", enrolledCourse)
  
//         const courseProgress = await CourseProgress.create({
//           courseID: courseId,
//           userId: userId,
//           completedVideos: [],
//         })
//         // Find the student and add the course to their list of enrolled courses
//         const enrolledStudent = await User.findByIdAndUpdate(
//           userId,
//           {
//             $push: {
//               courses: courseId,
//               courseProgress: courseProgress._id,
//             },
//           },
//           { new: true }
//         )
  
//         console.log("Enrolled student: ", enrolledStudent)
//         // Send an email notification to the enrolled student
//         // const emailResponse = await mailSender(
//         //   enrolledStudent.email,
//         //   `Successfully Enrolled into ${enrolledCourse.courseName}`,
//         //   courseEnrollmentEmail(
//         //     enrolledCourse.courseName,
//         //     `${enrolledStudent.firstName} ${enrolledStudent.lastName}`
//         //   )
//         // )
  
//         //console.log("Email sent successfully: ", emailResponse.response)
//       } catch (error) {
//         console.log(error)
//         return res.status(400).json({ success: false, error: error.message })
//       }
//     }
//   }

exports.enrollStudent = async (req, res) => {
    const { courseId, userId } = req.body;
  
    if (!courseId || !userId) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide Course ID and User ID" });
    }
  
    try {
      // Enroll the student in the course
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { studentsEnroled: userId } },
        { new: true }
      );
  
      if (!enrolledCourse) {
        return res.status(404).json({ success: false, message: "Course not found" });
      }
  
      const courseProgress = await CourseProgress.create({
        courseID: courseId,
        userId,
        completedVideos: [],
      });
  
      await User.findByIdAndUpdate(
        userId,
        {
          $push: { courses: courseId, courseProgress: courseProgress._id },
        },
        { new: true }
      );
  
      return res.status(200).json({
        success: true,
        message: `Successfully enrolled in ${enrolledCourse.courseName}`,
      });
    } catch (error) {
      console.error("Enrollment error:", error.message);
      return res.status(500).json({ success: false, message: error.message });
    }
  };