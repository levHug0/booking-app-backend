# GoLogic Booking Platform Backend
Backend using SailsJS framework. I also have a year of commercial experience with this framework, but same as before I
don't have experience building a backend using this from scratch and this version is also updated, so there was a lot of
learning to do. Unfortunately, the document is not the best and the community is not big, so it took sometime to solve issues.
Same as before, I want to get better and actually build something with this framework, and I think it turned out well.

## Problems / Solution

* Biggest problem was the documentation, it's not the best and it's difficult to find solutions
* Hardly any questions on Stackoverflow for this framework
* As mentioned on the README.md file on the frontend, Ember is looking for a property key from the RESTAdapter, so I had
to create a function inside the RoomController to modify response, so that it outputs the key first then the data
* I disabled the ability to create, update, delete room and booking details data, so anyone can't do them
* This backend is setup to work ONLY with what the frontend is looking for, so in terms of scalability, there's still a
lot of work to be done here, but it's pretty much ready for what the project needs
* When creating booking details I wanted to make sure that booking data are correct, there are checks that return a serverError
or badRequest if some of the data needed are incorrect or missing

## Files coded (Not Sails Boilerplate)

* All files inside `api/models`
* All files inside `api/controllers`
* `config/routes.js` is used to setup custom routes routes
* `config/datastore.js` this file is used to setup & connect MySQL database
* `config/policies.js` is used to forbid anyone from creating, updating, and deleting data in database
* `config/security.js` is used to enable cors from localhost:4200
* `config/blueprints.js` is used to enable rest

## Running / Development

* `npm install sails -g`
* Using a terminal cd into project `/booking-app-backend`
* Type `sails lift`



