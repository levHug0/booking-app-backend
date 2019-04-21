/**
 * RoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    showOne(req, res) {
        Room.findOne({id: req.param('id')}).exec((err, room) => {
            if (err) return res.serverError(err);
            return res.json({ room: room});
        });
    },

    showAll(req, res) {
        Room.find({active: 1}).exec((err, rooms) => {
            if (err) return res.serverError(err);
            return res.json({ rooms: rooms });
        });
    }
};

