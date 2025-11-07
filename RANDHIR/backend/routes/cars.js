import express from 'express';
import Car from '../models/Car.js';

const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find({ available: true });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create new car (admin only - for testing)
router.post('/', async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update car availability
router.patch('/:id/availability', async (req, res) => {
  try {
    const { available } = req.body;
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { available },
      { new: true }
    );
    
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
