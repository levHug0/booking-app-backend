/**
 * BookingDetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createBooking: function(req, res) {
        let email    = req.body.email;
        let capacity = req.body.capacity;
        let start    = req.body.start;
        let end      = req.body.end;
        let roomId   = req.body.id;

        let isMissingData = ( email === undefined || capacity === undefined || start === undefined ||
            end === undefined || roomId === undefined );

        if (isMissingData) {
            return res.serverError('Missing form data');
        }

        if ( parseInt(start) > parseInt(end) ) {
            return res.badRequest("Start date can't be after the End date");

        } else if ( parseInt(end) > (parseInt(start) * (86400 * 7)) ) {
            return res.badRequest("Maximum of 7 days per booking.");
        }

        Room.findOne({id: roomId}).exec((err, room) => {
            if (err) return res.serverError(err);

            if ( capacity > room.capacity ) {
                return res.badRequest("Requested capacity is bigger than Room capacity");
            }

            let query = {
                room_id: roomId,
            };

            if (start === end) {
                query.start_date = start;
            } else {
                query.start_date = { '>=': start };
                query.end_date = { '<=': end };
            }

            // Check if there's already booking made between the start and end date
            BookingDetails.find(query).limit(10).exec((err, booking) => {
                if (err) return res.serverError(err);

                if (booking.length > 0) {
                    return res.badRequest("Sorry dates are booked already.");
                }

                let create = {
                    email: email,
                    start_date: start,
                    end_date: end,
                    rooms_needed: capacity,
                    room_id: roomId,
                };

                BookingDetails.create(create, err => {
                    if (err) return res.badRequest(err);
                    return res.ok("Booked successfully");
                });
            });
        });
    }
};

