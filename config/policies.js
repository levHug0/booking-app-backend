/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  /*'*': {
      update: false,
      destroy: false,
  },*/

  /* Forbids anyone from creating, updating and destroying saved data */
  'RoomController': {
      create: false,
      update: false,
      destroy: false
  },

  'BookingDetailsController': {
      update: false,
      destroy: false
  }
};
