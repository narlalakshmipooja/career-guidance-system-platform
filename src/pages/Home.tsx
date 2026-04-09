import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, Users, BookOpen, ArrowRight, Star, Shield, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Compass className="feature-icon" />,
      title: "Career Discovery",
      description: "Explore hundreds of career paths tailored to your interests and skills."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Expert Mentorship",
      description: "Connect with industry professionals for personalized guidance."
    },
    {
      icon: <BookOpen className="feature-icon" />,
      title: "Learning Resources",
      description: "Access curated content to help you prepare for your dream job."
    }
  ];

  const stats = [
    { label: "Students Guided", value: "10K+" },
    { label: "Expert Mentors", value: "500+" },
    { label: "Career Paths", value: "200+" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star size={16} fill="#fde047" color="#fde047" />
            <span>Trusted by 10,000+ students</span>
          </motion.div>
          
          <motion.h1 
            className="main-heading"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Design Your <span className="text-gradient">Professional Future</span>
          </motion.h1>
          
          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Empowering students to discover their passion and make informed decisions 
            about their professional future through expert mentorship and comprehensive resources.
          </motion.p>
          
          <motion.div 
            className="button-group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button 
              className="primary-button" 
              onClick={() => navigate('/careers')}
            >
              Explore Careers <ArrowRight size={18} className="ml-2" />
            </button>
            <button 
              className="secondary-button" 
              onClick={() => navigate('/counselling')}
            >
              Book Counselling
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">We provide the tools and guidance you need to succeed.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-container"
          whileHover={{ scale: 1.01 }}
        >
          <div className="cta-content">
            <h2>Ready to start your journey?</h2>
            <p>Join thousands of students who have found their dream career with us.</p>
            <button className="primary-button white-btn" onClick={() => navigate('/login')}>
              Get Started Now
            </button>
          </div>
          <div className="cta-icons">
            <Zap size={120} className="cta-bg-icon" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;


