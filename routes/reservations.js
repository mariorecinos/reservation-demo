const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Route for creating a new reservation
router.post('/reservations', reservationController.createReservation);

// Route for retrieving all reservations
router.get('/reservations', reservationController.getAllReservations);

// Route for retrieving a specific reservation by ID
router.get('/reservations/:id', reservationController.getReservationById);

// Route for updating a reservation
router.put('/reservations/:id', reservationController.updateReservation);

// Route for deleting a reservation
router.delete('/reservations/:id', reservationController.deleteReservation);

module.exports = router;
