import "./CommonStyles.css";

import datascience from "../assets/data-science.webp";
import dataengg from "../assets/data-engineering.webp";

const DataScience = () => {
  const DataScienceData = [
    { title: "Data Analyst", image: dataengg },
    { title: "Data Science", image: datascience },
  ];

  return (
    <div className="courses-container">
      {DataScienceData.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.image} alt={course.title} className="course-image" />
          <p className="course-title">{course.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DataScience;
