import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const AddCareer: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    skills: '',
    salary: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Career Resource Added:', formData);
    setSubmitted(true);
    
    // Reset form after a delay or navigate back
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', description: '', skills: '', salary: '' });
    }, 5000);
  };

  return (
    <div className="add-career-page">
      <motion.button 
        className="back-button" 
        onClick={() => navigate('/admin')}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
      >
        ← Back to Dashboard
      </motion.button>
      
      <motion.div 
        className="form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Add New Career Resource</h1>
        <p className="page-subtitle">Fill in the details below to add a new profession to the platform.</p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              key="success"
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <h3>Resource Added Successfully!</h3>
              <p>The career path <strong>{formData.name}</strong> has been logged to the console.</p>
              <button className="secondary-button" onClick={() => setSubmitted(false)}>Add Another</button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              className="career-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="form-group">
                <label htmlFor="name">Career Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Briefly describe the role..."
                  rows={4}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="skills">Skills Required</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, Problem Solving (comma separated)"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="salary">Salary Range</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g. $70k - $120k"
                  required
                />
              </div>

              <button type="submit" className="submit-button">Add Career Resource</button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AddCareer;

