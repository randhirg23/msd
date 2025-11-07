import express from 'express';
import Booking from '../models/Booking.js';
import Car from '../models/Car.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get user's bookings
router.get('/my-bookings', authenticateToken, async (req, res) => {
  try {
    console.log('MyBookings API called for user:', req.user._id);
    const bookings = await Booking.find({ user: req.user._id })
      .populate('car', 'name brand model year price image features')
      .sort({ createdAt: -1 });
    
    console.log('Found bookings:', bookings.length);
    console.log('First booking car data:', bookings[0]?.car);
    res.json(bookings);
  } catch (error) {
    console.error('MyBookings API error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create new booking
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { carId, startDate, endDate, pickupLocation, dropoffLocation } = req.body;

    // Check if car exists and is available
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    if (!car.available) {
      return res.status(400).json({ message: 'Car is not available' });
    }

    // Calculate total price
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const totalPrice = days * car.price;

    // Create booking
    const booking = new Booking({
      user: req.user._id,
      car: carId,
      startDate,
      endDate,
      totalPrice,
      pickupLocation,
      dropoffLocation
    });

    await booking.save();

    // Populate car details
    await booking.populate('car', 'name brand model year price image');

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get booking by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('car', 'name brand model year price image')
      .populate('user', 'name email phone');
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if user owns this booking
    if (booking.user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Cancel booking
router.patch('/:id/cancel', authenticateToken, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if user owns this booking
    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Check if booking can be cancelled
    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Booking is already cancelled' });
    }

    if (booking.status === 'completed') {
      return res.status(400).json({ message: 'Cannot cancel completed booking' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({ message: 'Booking cancelled successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
