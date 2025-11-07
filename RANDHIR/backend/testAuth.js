import mongoose from 'mongoose';
import User from './models/User.js';
import Car from './models/Car.js';
import Booking from './models/Booking.js';
import connectDB from './config/database.js';

const testAuth = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Check if we have users
    const userCount = await User.countDocuments();
    console.log('Total users:', userCount);

    if (userCount === 0) {
      console.log('No users found. Creating a test user...');
      
      // Create a test user
      const testUser = new User({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        phone: '9876543210',
        address: 'Test Address'
      });
      
      await testUser.save();
      console.log('Test user created:', testUser._id);
    }

    // Get a user
    const user = await User.findOne();
    console.log('Found user:', user.email);

    // Check if we have cars
    const carCount = await Car.countDocuments();
    console.log('Total cars:', carCount);

    if (carCount > 0) {
      const car = await Car.findOne();
      console.log('Found car:', car.name);

      // Check if we have bookings for this user
      const bookingCount = await Booking.countDocuments({ user: user._id });
      console.log('Total bookings for user:', bookingCount);

      if (bookingCount === 0) {
        console.log('No bookings found. Creating a test booking...');
        
        // Create a test booking
        const testBooking = new Booking({
          user: user._id,
          car: car._id,
          startDate: new Date(),
          endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
          totalPrice: car.price * 2,
          status: 'pending',
          pickupLocation: 'Test Pickup Location',
          dropoffLocation: 'Test Dropoff Location'
        });
        
        await testBooking.save();
        console.log('Test booking created:', testBooking._id);
      }
    }

    console.log('Test completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
};

testAuth();
