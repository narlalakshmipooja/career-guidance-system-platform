import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Counselling from './pages/Counselling';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import AddCareer from './pages/AddCareer';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<CareerDetail />} />
            <Route path="/counselling" element={<Counselling />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add-career" element={<AddCareer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}




export default App;
