import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code, Stethoscope, BarChart, GraduationCap } from 'lucide-react';

const Careers: React.FC = () => {
  const navigate = useNavigate();
  const careerPaths = [
    {
      id: "software-developer",
      title: "Software Developer",
      description: "Design, develop, and maintain software systems and applications.",
      color: "#e0f2fe", // Light blue
      icon: <Code size={32} color="#0284c7" />
    },
    {
      id: "doctor",
      title: "Doctor",
      description: "Diagnose and treat illnesses, and provide medical care to patients.",
      color: "#fef2f2", // Light red
      icon: <Stethoscope size={32} color="#dc2626" />
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      description: "Analyze complex data to help organizations make informed decisions.",
      color: "#f0fdf4", // Light green
      icon: <BarChart size={32} color="#16a34a" />
    },
    {
      id: "teacher",
      title: "Teacher",
      description: "Educate students and help them develop knowledge and skills.",
      color: "#fffbeb", // Light yellow
      icon: <GraduationCap size={32} color="#d97706" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="careers-page">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Career Paths
      </motion.h1>
      <motion.p 
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Find the right profession that matches your passion and skills.
      </motion.p>
      
      <motion.div 
        className="career-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {careerPaths.map((career) => (
          <motion.div 
            key={career.id} 
            className="career-card"
            variants={itemVariants}
            style={{ backgroundColor: career.color }}
          >
            <div className="career-card-icon">{career.icon}</div>
            <h3 className="career-title">{career.title}</h3>
            <p className="career-description">{career.description}</p>
            <button 
              className="details-button"
              onClick={() => navigate(`/careers/${career.id}`)}
            >
              View Details
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Careers;



