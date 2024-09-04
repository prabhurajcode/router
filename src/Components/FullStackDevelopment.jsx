import "./CommonStyles.css";

import fsdMern from "../assets/mern-fsd.webp";
import fsdlamp from "../assets/python-at.webp";
import fsdjava from "../assets/java-at.webp";
import fsdnet from "../assets/java-fsd.webp";

const FullStackDevelopment = () => {
  const FullStackDevelopmentData = [
    { title: "Full Stack Development - MERN", image: fsdMern },
    { title: "Full Stack Development - MEAN", image: fsdlamp },
    { title: "Full Stack Development - JAVA", image: fsdjava },
    { title: "Full Stack Development - .NET", image: fsdnet },
  ];

  return (
    <div className="courses-container">
      {FullStackDevelopmentData.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.image} alt={course.title} className="course-image" />
          <p className="course-title">{course.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FullStackDevelopment;
