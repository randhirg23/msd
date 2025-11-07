import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import CarList from './components/CarList';
import BookingForm from './components/BookingForm';
import Login from './components/Login';
import Register from './components/Register';
import MyBookings from './components/MyBookings';
import TermsAndCharges from './components/TermsAndCharges';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    // Check if user is logged in on app load
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserData();
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      localStorage.removeItem('token');
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const handleBookCar = (car) => {
    if (!user) {
      alert('Please login first to book a car');
      return;
    }
    if (!car.available) {
      alert('This car is not available for booking');
      return;
    }
    setSelectedCar(car);
  };

  const handleBookingSubmit = (bookingData) => {
    alert(`Booking confirmed!\nCar: ${selectedCar.name}\nDates: ${bookingData.startDate} to ${bookingData.endDate}\nTotal: ₹${bookingData.totalPrice}`);
    setSelectedCar(null);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header user={user} onLogout={handleLogout}> </Header>
          
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <div className="hero">
                    <h1>Find Your Perfect Ride</h1>
                    <p>Rent the best cars at affordable prices</p>
                  </div>
                  <CarList onBookCar={handleBookCar} />
                </>
              } 
            />
            <Route 
              path="/login" 
              element={<Login onLogin={handleLogin} />} 
            />
            <Route 
              path="/register" 
              element={<Register onLogin={handleLogin} />} 
            />
            <Route 
              path="/bookings" 
              element={<MyBookings user={user} />} 
            />
            <Route 
              path="/terms" 
              element={<TermsAndCharges />} 
            />
          </Routes>

          {selectedCar && (
            <BookingForm 
              car={selectedCar}
              user={user}
              onSubmit={handleBookingSubmit}
              onClose={() => setSelectedCar(null)}
            />
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;