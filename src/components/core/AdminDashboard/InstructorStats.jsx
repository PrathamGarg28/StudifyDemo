import React, { useEffect, useState } from "react";
//import axios from "axios";
import { apiConnector } from "../../../services/apiConnector"
import { courseEndpoints } from "../../../services/apis"

const {GET_INSTRUCTOR_STATS_API,GET_ALL_INSTRUCTOR_API}=courseEndpoints

const InstructorStats = () => {
  const [instructors, setInstructors] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        // Fetch all instructors from the backend
        const { data } = await apiConnector("GET",GET_ALL_INSTRUCTOR_API); // Replace with your API endpoint
        const instructorList = data?.instructors || [];
        setInstructors(instructorList);

        // Fetch stats for each instructor
        const statsPromises = instructors.map(async (instructor) => {
          const response = await apiConnector("GET",GET_INSTRUCTOR_STATS_API, {
            instructorId: instructor._id,
          });
          return { instructorId: instructor._id, ...response.data.data };
        });

        // Resolve all stats promises
        const resolvedStats = await Promise.all(statsPromises);
        setStats(resolvedStats);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Instructor Statistics</h1>
      {stats.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Instructor Name</th>
              <th>Department</th>
              <th>Total Courses</th>
              <th>Total Income</th>
              <th>Total Students</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.instructorId}>
                <td>{stat.instructorName}</td>
                <td>{stat.departmentName}</td>
                <td>{stat.totalCourses}</td>
                <td>{stat.totalIncome}</td>
                <td>{stat.totalStudents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No instructor stats available.</div>
      )}
    </div>
  );
};

export default InstructorStats;
