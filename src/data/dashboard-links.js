import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    type: ACCOUNT_TYPE.INSTRUCTOR || ACCOUNT_TYPE.STUDENT,
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 7,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscArchive",
  },
  {
    id: 8,
    name: "Admin Profile",
    path: "/admindashboard/admin-profile",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAccount",
  },
  {
    id: 9,
    name: "Admin Profile Settings",
    path: "/admindashboard/adminsettings",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAccount",
  },
  {
    id: 10,
    name: "Add Student(s)",
    path: "/admindashboard/addstudent",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAccount",
  },
  {
    id: 11,
    name: "Add Instructor(s)",
    path: "/admindashboard/addinstructor",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAccount",
  },
  // {
  //   id:12,
  //   name:"Get Instructor Stats",
  //   path:"admindashboard/instructorstats",
  //   type:ACCOUNT_TYPE.ADMIN,
  //   icon:"VscAccount",
  // }
]
