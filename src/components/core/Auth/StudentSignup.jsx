import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Papa from "papaparse";
import { signUp } from "../../../services/operations/studentAuthAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function StudentSignup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //instructor
//   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.INSTRUCTOR)

    // Define function to handle CSV file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          handleBulkSignup(results.data);
        },
        skipEmptyLines: true,
      });
    }
  };

  // Handle bulk sign-up based on parsed CSV data
  const handleBulkSignup = (students) => {
    students.forEach((student) => {
      dispatch(
        signUp(
          student.firstName,
          student.lastName,
          student.email,
          student.password,
          student.confirmPassword,
          ACCOUNT_TYPE.STUDENT,
          student.studentId,
          student.department,
          student.branch,
          student.validTillDate
        )
      );
    })}
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType:ACCOUNT_TYPE.STUDENT,
    studentId:"",
    department:"",
    branch:"",
    validTillDate:""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword,accountType,studentId,department,branch,validTillDate} = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      validTillDate: date,
    }));
  };
  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      validTillDate: formData.validTillDate ? formData.validTillDate.toISOString().split('T')[0] : "", // Convert to "YYYY-MM-DD"
      accountType: ACCOUNT_TYPE.STUDENT,
    };

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
            // dispatch(sendOtp(formData.email, navigate))
    console.log("Pratham 1");
    
    dispatch(
      signUp(formData.firstName,formData.lastName,formData.email,formData.password,formData.confirmPassword, // contactNumber, assuming null if not used
        formData.accountType,formData.studentId,formData.department,formData.branch,signupData.validTillDate)
    )
    console.log("Pratham 2");
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      accountType:ACCOUNT_TYPE.STUDENT,
      studentId:"",
      department:"",
      branch:"",
      validTillDate:null,
    })
    
  }

  // data to pass to Tab component
//   const tabData = [
//     {
//       id: 1,
//       tabName: "Student",
//       type: ACCOUNT_TYPE.STUDENT,
//     },
//     {
//       id: 2,
//       tabName: "Instructor",
//       type: ACCOUNT_TYPE.INSTRUCTOR,
//     },
//   ]

  return (
    <div>
      {/* Tab */}
      {/* <Tab tabData={tabData} field={accountType} setField={setAccountType} /> */}
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style w-full"
            />
          </label>
        </div>
        <label className="w-1/2">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-full"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full !pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full !pr-10"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Student ID<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="number"
              name="studentId"
              value={studentId}
              onChange={handleOnChange}
              placeholder="Enter Instructor Id"
              className="form-style w-full !pr-10"
            />
          </label>
        </div>

        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Department <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="department"
              value={department}
              onChange={handleOnChange}
              placeholder="Enter Name of the Department"
              className="form-style w-full !pr-10"
            />
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Branch <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="branch"
              value={branch}
              onChange={handleOnChange}
              placeholder="Enter Name of Student's Branch"
              className="form-style w-full !pr-10"
            />
          </label>
          <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Valid Till Date <sup className="text-pink-200">*</sup>
          </p>
          <DatePicker
            selected={formData.validTillDate}
            value={validTillDate}
            onChange={handleDateChange}
            dateFormat="MM-dd-yyyy"
            placeholderText="MM-DD-YYYY"
            className="form-style w-full"
          />
        </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
      {/* Button for bulk instructor upload */}
      <div className="mt-4 text-white ">
        <label className="text-white block text-sm font-medium text-gray-700">Bulk Student Registration  (CSV)</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-yellow-50 file:text-richblack-900 hover:file:bg-yellow-100"
        />
      </div>
    </div>
  )
}

export default StudentSignup