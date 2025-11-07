import React, { useState, useEffect } from 'react';
import './CarList.css';

function CarList({ onBookCar }) {
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cars');
      if (response.ok) {
        const data = await response.json();
        setCars(data);
      } else {
        // Fallback to fixed cars if API fails
        setCars(getFixedCars());
        setError('Using sample cars - API connection failed');
      }
    } catch (error) {
      // Fallback to fixed cars if network error
      setCars(getFixedCars());
      setError('Using sample cars - Network error');
    } finally {
      setLoading(false);
    }
  };

  const getFixedCars = () => [
    {
      _id: '1',
      name: 'Honda Civic',
      brand: 'Honda',
      model: 'Civic',
      year: 2023,
      price: 5000,
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80',
      features: ['Air Conditioning', 'Bluetooth', 'Backup Camera', 'Cruise Control'],
      available: true,
      description: 'Reliable and fuel-efficient sedan perfect for city driving.'
    },
    {
      _id: '2',
      name: 'Toyota Camry',
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 6500,
      image: 'https://auto.hindustantimes.com/htmobile1/toyota_camry-2024/images/exterior_toyota-camry-2024_front-left-side_930x620.jpg',
      features: ['Air Conditioning', 'Bluetooth', 'Backup Camera', 'Lane Departure Warning'],
      available: true,
      description: 'Comfortable mid-size sedan with excellent safety features.'
    },
    {
      _id: '3',
      name: 'BMW 3 Series',
      brand: 'BMW',
      model: '3 Series',
      year: 2023,
      price: 15000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
      features: ['Leather Seats', 'Navigation', 'Premium Sound', 'Sport Mode'],
      available: false,
      description: 'Luxury sedan with sporty performance and premium features.'
    },
    {
      _id: '4',
      name: 'Audi A4',
      brand: 'Audi',
      model: 'A4',
      year: 2023,
      price: 14000,
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/A4/10548/1757137106350/front-left-side-47.jpg',
      features: ['Quattro AWD', 'Virtual Cockpit', 'Premium Interior', 'Advanced Safety'],
      available: true,
      description: 'Premium German engineering with all-wheel drive capability.'
    },
    {
      _id: '5',
      name: 'Mercedes C-Class',
      brand: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2023,
      price: 18000,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500',
      features: ['MBUX System', 'Ambient Lighting', 'Premium Audio', 'Driver Assistance'],
      available: true,
      description: 'Luxury sedan with cutting-edge technology and comfort.'
    },
    {
      _id: '6',
      name: 'Tesla Model 3',
      brand: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 12000,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500',
      features: ['Autopilot', 'Supercharger Network', 'Minimalist Interior', 'Over-the-Air Updates'],
      available: false,
      description: 'Electric vehicle with advanced autopilot and long range.'
    },
    {
      _id: '7',
      name: 'Maruti Swift',
      brand: 'Maruti',
      model: 'Swift',
      year: 2023,
      price: 3500,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
      features: ['Air Conditioning', 'Power Steering', 'Music System', 'Central Locking'],
      available: true,
      description: 'Compact and efficient hatchback perfect for city driving.'
    },
    {
      _id: '8',
      name: 'Hyundai Creta',
      brand: 'Hyundai',
      model: 'Creta',
      year: 2023,
      price: 8000,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
      features: ['Sunroof', 'Touchscreen', 'Climate Control', 'Alloy Wheels'],
      available: true,
      description: 'Premium SUV with modern features and comfortable seating.'
    },
    {
      _id: '9',
      name: 'Porsche 911',
      brand: 'Porsche',
      model: '911',
      year: 2023,
      price: 20000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
      features: ['Sports Mode', 'Premium Leather', 'Sport Exhaust', 'Track Package'],
      available: true,
      description: 'Ultimate sports car with legendary performance and handling.'
    }
  ];

  const filteredCars = filter === 'all' 
    ? cars 
    : cars.filter(car => car.brand.toLowerCase() === filter.toLowerCase());

  return (
    <div className="car-list">
      <div className="container">
        <h2>Available Cars</h2>
        
        <div className="filters">
          {['all', 'honda', 'toyota', 'bmw', 'audi', 'mercedes-benz', 'tesla', 'maruti', 'hyundai', 'porsche'].map(brand => (
            <button
              key={brand}
              className={`filter-btn ${filter === brand ? 'active' : ''}`}
              onClick={() => setFilter(brand)}
            >
              {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </button>
          ))}
        </div>

        {loading && <div className="loading">Loading cars...</div>}
        {error && <div className="error">{error}</div>}
        
        <div className="cars-grid">
          {filteredCars.map(car => (
            <div key={car._id} className={`car-card ${!car.available ? 'unavailable' : ''}`}>
              <div className="car-image-container">
                <img src={car.image} alt={car.name} />
                {!car.available && (
                  <div className="unavailable-overlay">
                    <span className="unavailable-text">Not Available</span>
                  </div>
                )}
              </div>
              <div className="car-info">
                <h3>{car.name}</h3>
                <span className="car-type">{car.brand} {car.model} ({car.year})</span>
                <div className="car-features">
                  {car.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="car-price">₹{car.price}/day</div>
                {car.available ? (
                  <button 
                    className="book-btn"
                    onClick={() => onBookCar(car)}
                  >
                    Book Now
                  </button>
                ) : (
                  <button 
                    className="book-btn unavailable-btn"
                    disabled
                  >
                    Not Available
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarList;