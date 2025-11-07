import React, { useState, useEffect } from 'react';
import './MyBookings.css';

function MyBookings({ user }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Fetching bookings with token:', token ? 'Present' : 'Missing');
      
      if (!token) {
        setError('No authentication token found. Please login again.');
        setLoading(false);
        return;
      }
      
      const response = await fetch('http://localhost:5000/api/bookings/my-bookings', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Bookings data:', data);
        console.log('First booking structure:', data[0]);
        console.log('First booking car:', data[0]?.car);
        setBookings(data || []);
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Failed to parse error response' }));
        console.log('Error response:', errorData);
        setError(`Failed to load bookings: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      setError(`Network error: ${error.message}. Please check if the backend server is running.`);
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/cancel`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchBookings(); // Refresh bookings
      } else {
        alert('Failed to cancel booking');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#28a745';
      case 'pending': return '#ffc107';
      case 'cancelled': return '#dc3545';
      case 'completed': return '#6c757d';
      default: return '#6c757d';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!user) {
    return (
      <div className="my-bookings">
        <div className="container">
          <div className="no-user">
            <h2>Please Login</h2>
            <p>You need to be logged in to view your bookings.</p>
            <a href="/login" className="login-link">Go to Login</a>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="my-bookings">
        <div className="container">
          <div className="loading">Loading your bookings...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-bookings">
      <div className="container">
        <div className="bookings-header">
          <h2>My Bookings</h2>
          <p>Manage your car rental bookings</p>
        </div>

        {error && (
          <div className="error">
            {error}
            <button 
              className="retry-btn"
              onClick={() => {
                setError('');
                setLoading(true);
                fetchBookings();
              }}
            >
              Retry
            </button>
          </div>
        )}

        {bookings.length === 0 ? (
          <div className="no-bookings">
            <div className="no-bookings-icon">📋</div>
            <h3>No Bookings Yet</h3>
            <p>You haven't made any bookings yet. Start by browsing our available cars!</p>
            <a href="/" className="browse-cars-btn">Browse Cars</a>
          </div>
        ) : (
        <div className="bookings-grid">
          {bookings.map(booking => {
            // Handle case where car data might be missing
            const carData = booking.car || {};
            console.log('Rendering booking:', booking._id, 'Car data:', carData);
            
            return (
              <div key={booking._id} className="booking-card">
                <div className="booking-image">
                  <img 
                    src={carData.image || 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500'} 
                    alt={carData.name || 'Car'} 
                  />
                </div>
                <div className="booking-info">
                  <h3>{carData.name || 'Unknown Car'}</h3>
                  <p className="car-details">
                    {carData.brand || 'Unknown'} {carData.model || 'Model'} ({carData.year || 'N/A'})
                  </p>
                  
                  <div className="booking-dates">
                    <div className="date-item">
                      <span className="date-label">Start Date:</span>
                      <span className="date-value">{formatDate(booking.startDate)}</span>
                    </div>
                    <div className="date-item">
                      <span className="date-label">End Date:</span>
                      <span className="date-value">{formatDate(booking.endDate)}</span>
                    </div>
                  </div>

                  <div className="booking-locations">
                    <div className="location-item">
                      <span className="location-label">Pickup:</span>
                      <span className="location-value">{booking.pickupLocation}</span>
                    </div>
                    <div className="location-item">
                      <span className="location-label">Drop-off:</span>
                      <span className="location-value">{booking.dropoffLocation}</span>
                    </div>
                  </div>

                  <div className="booking-total">
                    <span className="total-label">Total Amount:</span>
                    <span className="total-value">₹{booking.totalPrice}</span>
                  </div>

                  <div className="booking-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(booking.status) }}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>

                  {booking.status === 'pending' && (
                    <button 
                      className="cancel-btn"
                      onClick={() => cancelBooking(booking._id)}
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
}

export default MyBookings;
