/**
 * Room.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id:              { type: 'number', autoIncrement: true },
      name:            { type: 'string' },
      image:           { type: 'string' },
      details:         { type: 'string' },
      address:         { type: 'string' },
      price:           { type: 'number' },
      capacity:        { type: 'number' },
      active: { type: 'number', defaultsTo: 1 },
      booking_details: { collection: 'bookingDetails', via: 'room_id' },
      createdAt: false,
      updatedAt: false,
  },

  
};

