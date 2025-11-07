import Car from './models/Car.js';
import connectDB from './config/database.js';

const seedCars = async () => {
  try {
    await connectDB();
    
    // Clear existing cars
    await Car.deleteMany({});
    
    const cars = [
      {
        name: 'Honda Civic',
        brand: 'Honda',
        model: 'Civic',
        year: 2023,
        price: 5000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
        features: ['Air Conditioning', 'Bluetooth', 'Backup Camera', 'Cruise Control'],
        description: 'Reliable and fuel-efficient sedan perfect for city driving.'
      },
      {
        name: 'Toyota Camry',
        brand: 'Toyota',
        model: 'Camry',
        year: 2023,
        price: 6500,
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
        features: ['Air Conditioning', 'Bluetooth', 'Backup Camera', 'Lane Departure Warning'],
        description: 'Comfortable mid-size sedan with excellent safety features.'
      },
      {
        name: 'BMW 3 Series',
        brand: 'BMW',
        model: '3 Series',
        year: 2023,
        price: 15000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
        features: ['Leather Seats', 'Navigation', 'Premium Sound', 'Sport Mode'],
        description: 'Luxury sedan with sporty performance and premium features.'
      },
      {
        name: 'Audi A4',
        brand: 'Audi',
        model: 'A4',
        year: 2023,
        price: 14000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500',
        features: ['Quattro AWD', 'Virtual Cockpit', 'Premium Interior', 'Advanced Safety'],
        description: 'Premium German engineering with all-wheel drive capability.'
      },
      {
        name: 'Mercedes C-Class',
        brand: 'Mercedes-Benz',
        model: 'C-Class',
        year: 2023,
        price: 18000,
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500',
        features: ['MBUX System', 'Ambient Lighting', 'Premium Audio', 'Driver Assistance'],
        description: 'Luxury sedan with cutting-edge technology and comfort.'
      },
      {
        name: 'Tesla Model 3',
        brand: 'Tesla',
        model: 'Model 3',
        year: 2023,
        price: 12000,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500',
        features: ['Autopilot', 'Supercharger Network', 'Minimalist Interior', 'Over-the-Air Updates'],
        description: 'Electric vehicle with advanced autopilot and long range.'
      },
      {
        name: 'Maruti Swift',
        brand: 'Maruti',
        model: 'Swift',
        year: 2023,
        price: 3500,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
        features: ['Air Conditioning', 'Power Steering', 'Music System', 'Central Locking'],
        description: 'Compact and efficient hatchback perfect for city driving.'
      },
      {
        name: 'Hyundai Creta',
        brand: 'Hyundai',
        model: 'Creta',
        year: 2023,
        price: 8000,
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
        features: ['Sunroof', 'Touchscreen', 'Climate Control', 'Alloy Wheels'],
        description: 'Premium SUV with modern features and comfortable seating.'
      },
      {
        name: 'Porsche 911',
        brand: 'Porsche',
        model: '911',
        year: 2023,
        price: 20000,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
        features: ['Sports Mode', 'Premium Leather', 'Sport Exhaust', 'Track Package'],
        description: 'Ultimate sports car with legendary performance and handling.'
      }
    ];

    await Car.insertMany(cars);
    console.log('Cars seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding cars:', error);
    process.exit(1);
  }
};

seedCars();
