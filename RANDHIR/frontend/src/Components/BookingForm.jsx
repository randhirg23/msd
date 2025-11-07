import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ car, user, onSubmit, onClose }) {
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    pickupLocation: '',
    dropoffLocation: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          carId: car._id,
          startDate: bookingData.startDate,
          endDate: bookingData.endDate,
          pickupLocation: bookingData.pickupLocation,
          dropoffLocation: bookingData.dropoffLocation
        })
      });

      const data = await response.json();

      if (response.ok) {
        onSubmit(data);
      } else {
        setError(data.message || 'Booking failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const calculateDays = () => {
    if (bookingData.startDate && bookingData.endDate) {
      const start = new Date(bookingData.startDate);
      const end = new Date(bookingData.endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      return days > 0 ? days : 0;
    }
    return 0;
  };

  const totalPrice = calculateDays() * car.price;

  return (
    <div className="booking-modal">
      <div className="booking-content">
        <div className="booking-header">
          <h2>Book {car.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="booking-body">
          <div className="car-summary">
            <img src={car.image} alt={car.name} />
            <div className="car-details">
              <h3>{car.name}</h3>
              <p>Type: {car.type}</p>
              <p>Price: ${car.price}/day</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Start Date:</label>
              <input
                type="date"
                name="startDate"
                value={bookingData.startDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date:</label>
              <input
                type="date"
                name="endDate"
                value={bookingData.endDate}
                onChange={handleChange}
                min={bookingData.startDate}
                required
              />
            </div>

            <div className="form-group">
              <label>Pickup Location:</label>
              <input
                type="text"
                name="pickupLocation"
                placeholder="Enter pickup location"
                value={bookingData.pickupLocation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Drop-off Location:</label>
              <input
                type="text"
                name="dropoffLocation"
                placeholder="Enter drop-off location"
                value={bookingData.dropoffLocation}
                onChange={handleChange}
                required
              />
            </div>

            {calculateDays() > 0 && (
              <div className="price-summary">
                <h4>Booking Summary</h4>
                <p>{calculateDays()} days × ₹{car.price}/day</p>
                <h3>Total: ₹{totalPrice}</h3>
              </div>
            )}

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="confirm-btn" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;