import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, LogIn, CheckCircle, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Mock login logic
    console.log('Login attempt:', { email, password });
    setIsLoggedIn(true);
  };

  return (
    <div className="login-page">
      <AnimatePresence mode="wait">
        {isLoggedIn ? (
          <motion.div 
            key="success"
            className="login-container success-view"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <CheckCircle size={80} color="#059669" className="mx-auto mb-6" />
            <h2>Welcome Back!</h2>
            <p>You have successfully logged in to your Career Guidance account.</p>
            <button className="primary-button" onClick={() => window.location.href = '/'}>
              Go to Home
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            className="login-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="page-title">Login</h1>
            <p className="page-subtitle">Access your personalized career dashboard.</p>
            
            <form onSubmit={handleSubmit} className="login-form">
              {error && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  {error}
                </motion.div>
              )}
              
              <div className="form-group">
                <label htmlFor="email"><Mail size={16} className="inline mr-2" /> Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="name@example.com"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password"><Lock size={16} className="inline mr-2" /> Password</label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="••••••••"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              
              <button type="submit" className="login-button">
                <LogIn size={18} className="mr-2" /> Sign In
              </button>
            </form>
            
            <div className="login-footer">
              <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;


