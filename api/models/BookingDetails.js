/**
 * BookingDetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'booking_details',

  attributes: {
      id:           { type: 'number', autoIncrement: true },
      email:        { type: 'string' },
      start_date:   { type: 'string' },
      end_date:     { type: 'string' },
      rooms_needed: { type: 'number' },
      room_id:      { model: 'room' },
      active: { type: 'number', defaultsTo: 1 },
      createdAt: false,
      updatedAt: false
  },

};

