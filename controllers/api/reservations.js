const Reservation = require('../../models/reservation')

module.exports = {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation
}

// Controller for creating a new reservation

async function createReservation(req, res) {
  try {
    const user = req.user._id
    const reservationData = req.body
    const reservation = await Reservation.create(reservationData);
    res.json(reservation)

  } catch (error) {
    res.json(error)
  }
}

// Controller for retrieving all reservations
asnyc function getAllReservations(req, res) {
  try {
    const reservations = await Reservation.find({ user: req.user._id });
    res.json(reservations);
  } catch (error) {
    res.json (error)
  }
};

// Controller for retrieving a specific reservation by ID
async function getReservationById(req, res) {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.json(reservation);
  } catch (error) {
    res.json(error)
  }
};
