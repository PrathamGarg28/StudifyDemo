import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    enrollSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    enrollFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    resetEnrollmentState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

export const {
  enrollRequest,
  enrollSuccess,
  enrollFailure,
  resetEnrollmentState,
} = enrollmentSlice.actions;

export const enrollReducer = enrollmentSlice.reducer;

/**
 * Independent API function for enrolling courses.
 */
export const enrollCourses = async ({ token, userId, courses }) => {
  if (!courses || courses.length === 0) {
    toast.error("No courses to enroll in.");
    return { success: false, message: "No courses to enroll in." };
  }

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      "/api/enroll",
      { courses, userId },
      config
    );

    if (response.data.success) {
      toast.success("Successfully enrolled in courses!");
      return { success: true, message: response.data.message };
    } else {
      toast.error("Failed to enroll in courses.");
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Enrollment failed.";
    toast.error(errorMessage);
    return { success: false, message: errorMessage };
  }
};
