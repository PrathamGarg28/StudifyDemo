const BASE_URL = process.env.REACT_APP_BASE_URL

//Admin ENDPOINTS
export const adminEndpoints = {
  SENDOTP_API: BASE_URL + "/admin/sendotp",
  SIGNUP_API: BASE_URL + "/admin/signup",
  LOGIN_API: BASE_URL + "/admin/login",
  RESETPASSTOKEN_API: BASE_URL + "/admin/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/admin/reset-password",
}

export const adminSettingEndpoints={
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/adminprofile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/adminprofile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/admin/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/adminprofile/deleteProfile",
}

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

//INSTRUCTOR ENDPOINTS
export const instructorEndpoints = {
  SENDOTP_API: BASE_URL + "/instructor/sendotp",
  SIGNUP_API: BASE_URL + "/instructor/signup",
  LOGIN_API: BASE_URL + "/instructor/login",
  RESETPASSTOKEN_API: BASE_URL + "/instructor/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/instructor/reset-password",
}


// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  SENDOTP_API: BASE_URL + "/student/sendotp",
  SIGNUP_API: BASE_URL + "/student/signup",
  LOGIN_API: BASE_URL + "/student/login",
  RESETPASSTOKEN_API: BASE_URL + "/student/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/student/reset-password",
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",

}

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/course/editCourse",
  COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/course/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + "/course/createRating",

  //new new
  ENROLL_COURSE_API:BASE_URL + "/enroll/enrollStudents"

}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/getCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}



// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
