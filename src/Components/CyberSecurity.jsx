import "./CommonStyles.css";
import begineers from "../assets/cybersecuritybegineers.webp";
import cybersecurity from "../assets/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp";
import cybersecurity2 from "../assets/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.webp";

const CyberSecurity = () => {
  const CyberSecurityData = [
    { title: "Cyber Security", image: begineers },
    { title: "Cyber Security intermediate", image: cybersecurity },
    { title: "Cyber Security Advanced", image: cybersecurity2 },
  ];

  return (
    <div className="courses-container">
      {CyberSecurityData.map((course, index) => (
        <div className="course-card" key={index}>
          <img src={course.image} alt={course.title} className="course-image" />
          <p className="course-title">{course.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CyberSecurity;
