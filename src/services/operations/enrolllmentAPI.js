// import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector"
import { courseEndpoints } from "../apis";

const{
    ENROLL_COURSE_API,
}=courseEndpoints

// export const enrollCourses = async ({ token, userId, courses }) => {
//     console.log("Pratham 1");
    
//     if (!courses || courses.length === 0) {
//       toast.error("No courses to enroll in.");
//       return { success: false, message: "No courses to enroll in." };
//     }
  
//     try {
//     //   const config = {
//     //     headers: {
//     //       Authorization: `Bearer ${token}`,
//     //     },
//     //   };
  
//       const response = await apiConnector(
//         "POST",
//         ENROLL_COURSE_API,
//         { courses, userId },
//         {
//             Authorization: `Bearer ${token}`,
//         }
//       );
  
//       if (response.data.success) {
//         toast.success("Successfully enrolled in courses!");
//         return { success: true, message: response.data.message };
//       } else {
//         toast.error("Failed to enroll in courses.");
//         return { success: false, message: response.data.message };
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || "Enrollment failed.";
//       toast.error(errorMessage);
//       return { success: false, message: errorMessage };
//     }
//   };
  
export const enrollCourse = async ({ token, userId, courseId }) => {
    console.log("pratham1");
    
    try {
        console.log("pratham2");
    //   const response = await apiConnector(
    //             "POST",
    //             ENROLL_COURSE_API,
    //     { courseId, userId },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    const response = await axios.post(
        "/enroll/enrollStudents",
        { courseId, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("pratham3");
      return response.data;
    } catch (error) {
      console.error("Enrollment failed:", error.response?.data || error.message);
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };