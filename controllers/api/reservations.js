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
    req.body.user = req.user._id
    const reservation = await Reservation.create(req.body);
    res.json(reservation)

  } catch (error) {
    res.json(error)
  }
}

// Controller for retrieving all reservations
async function getAllReservations(req, res) {
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
    const reservation = await Reservation.findById({_id: req.params.id});
    res.json(reservation);
  } catch (error) {
    res.json(error)
  }
};


// Controller for updating a reservation
async function updateReservation(req, res)  {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(reservation);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update reservation' });
  }
};

// Controller for deleting a reservation
async function deleteReservation(req, res) {
  try {
    await Reservation.findByIdAndDelete({ _id: req.params.id, user: req.user._id });
    const reservations = await Reservation.find({ user: req.user._id })
    res.json(reservations)
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete reservation' });
  }
};
