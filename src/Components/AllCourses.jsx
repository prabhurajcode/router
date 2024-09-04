import "./CommonStyles.css";

import fsdMern from "../assets/mern-fsd.webp";
import datascience from "../assets/data-science.webp";
import dataengg from "../assets/data-engineering.webp";
import uiux from "../assets/ui-ux.webp";

const AllCourses = () => {
  const AllCoursesData = [
    { title: "Full Stack Development", image: fsdMern },
    { title: "Machine Learning", image: dataengg },
    { title: "Data Science", image: datascience },
    { title: "UI-UX", image: uiux },
  ];

  return (
    <div className="courses-container">
      {AllCoursesData.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.image} alt={course.title} className="course-image" />
          <p className="course-title">{course.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
