import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const adminSections = [
    {
      title: "Add Career Resource",
      description: "Upload new career paths, skills, and educational resources.",
      icon: "➕",
      action: "Add New",
      path: "/admin/add-career"
    },
    {
      title: "View Users",
      description: "Manage student profiles and track their progress.",
      icon: "👥",
      action: "Manage Users",
      path: "/admin"
    },
    {
      title: "View Bookings",
      description: "Review and manage counselling session requests.",
      icon: "📅",
      action: "Manage Bookings",
      path: "/admin"
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
    <div className="admin-dashboard">
      <motion.div 
        className="admin-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Admin Dashboard</h1>
        <p className="page-subtitle">Manage platform resources and user interactions.</p>
      </motion.div>

      <motion.div 
        className="admin-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {adminSections.map((section, index) => (
          <motion.div 
            key={index} 
            className="admin-card"
            variants={itemVariants}
          >
            <div className="admin-card-icon">{section.icon}</div>
            <h3 className="admin-card-title">{section.title}</h3>
            <p className="admin-card-description">{section.description}</p>
            <button 
              className="admin-action-button"
              onClick={() => navigate(section.path)}
            >
              {section.action}
            </button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="admin-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="stat-item">
          <span className="stat-value">124</span>
          <span className="stat-label">Total Users</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">45</span>
          <span className="stat-label">Active Bookings</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">12</span>
          <span className="stat-label">New Resources</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;

