const Reservation = require('../../models/reservation')

module.exports = {
  createReservation,
//   getAllReservations,
//   getReservationById,
//   updateReservation,
//   deleteReservation
// }

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
