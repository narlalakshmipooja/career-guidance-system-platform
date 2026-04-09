import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CareerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock data for career details
  const careerData: Record<string, any> = {
    "software-developer": {
      title: "Software Developer",
      description: "Design, develop, and maintain software systems and applications.",
      skills: ["JavaScript/TypeScript", "React", "Node.js", "Problem Solving", "Git"],
      salary: "$70,000 - $150,000+",
      courses: ["Computer Science Degree", "Web Development Bootcamps", "Data Structures & Algorithms"]
    },
    "doctor": {
      title: "Doctor",
      description: "Diagnose and treat illnesses, and provide medical care to patients.",
      skills: ["Medical Knowledge", "Empathy", "Critical Thinking", "Communication", "Stamina"],
      salary: "$150,000 - $400,000+",
      courses: ["Pre-med Degree", "Medical School (MD/DO)", "Residency Program"]
    },
    "data-scientist": {
      title: "Data Scientist",
      description: "Analyze complex data to help organizations make informed decisions.",
      skills: ["Python/R", "Machine Learning", "Statistics", "Data Visualization", "SQL"],
      salary: "$90,000 - $180,000+",
      courses: ["Data Science Degree", "Statistics/Math Degree", "Machine Learning Certifications"]
    },
    "teacher": {
      title: "Teacher",
      description: "Educate students and help them develop knowledge and skills.",
      skills: ["Patience", "Communication", "Lesson Planning", "Adaptability", "Subject Expertise"],
      salary: "$40,000 - $90,000+",
      courses: ["Education Degree", "Teaching Certification", "Subject-specific Specialization"]
    }
  };

  const career = id ? careerData[id] : null;

  if (!career) {
    return (
      <div className="detail-container">
        <h2>Career not found</h2>
        <button className="back-button" onClick={() => navigate('/careers')}>Back to Careers</button>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate('/careers')}>← Back to Careers</button>
      
      <div className="detail-header">
        <h1>{career.title}</h1>
        <p className="detail-description">{career.description}</p>
      </div>

      <div className="detail-content">
        <section className="detail-section">
          <h3>Skills Required</h3>
          <ul className="detail-list">
            {career.skills.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h3>Salary Range</h3>
          <p className="salary-text">{career.salary}</p>
        </section>

        <section className="detail-section">
          <h3>Recommended Courses</h3>
          <ul className="detail-list">
            {career.courses.map((course: string, index: number) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CareerDetail;
