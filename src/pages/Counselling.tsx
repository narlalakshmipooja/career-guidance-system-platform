import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Calendar, Users as UsersIcon, CheckCircle } from 'lucide-react';

const Counselling: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    counsellor: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const counsellors = [
    "Dr. Sarah Johnson - Tech Career Expert",
    "Prof. Michael Chen - Medical Advisor",
    "Ms. Emily Davis - Data Science Specialist",
    "Mr. Robert Wilson - Academic Mentor"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', date: '', counsellor: '' });
    }, 5000);
  };

  return (
    <div className="counselling-page">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Book a Counselling Session
      </motion.h1>
      <motion.p 
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get personalized guidance from our expert mentors.
      </motion.p>

      <motion.div 
        className="booking-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              key="success"
              className="success-message"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle size={64} color="#059669" className="mx-auto mb-6" />
              <h3>Booking Successful!</h3>
              <p>Thank you, <strong>{formData.name}</strong>. Your session with <strong>{formData.counsellor}</strong> has been requested for <strong>{formData.date}</strong>.</p>
              <p>We will send a confirmation email to {formData.email} shortly.</p>
              <button className="secondary-button" onClick={() => setSubmitted(false)}>Book Another Session</button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              className="booking-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="form-group">
                <label htmlFor="name"><User size={16} className="inline mr-2" /> Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"><Mail size={16} className="inline mr-2" /> Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date"><Calendar size={16} className="inline mr-2" /> Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="counsellor"><UsersIcon size={16} className="inline mr-2" /> Select Counsellor</label>
                <select
                  id="counsellor"
                  name="counsellor"
                  value={formData.counsellor}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Choose a counsellor</option>
                  {counsellors.map((c, index) => (
                    <option key={index} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="book-button">Book Session</button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Counselling;


