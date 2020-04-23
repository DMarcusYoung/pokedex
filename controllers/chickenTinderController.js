const connection = require('../config/connection');
// Placeholder for query files that will be in models
const chickenTinderQueries = require('../models/chickenTinderQueries/chickenTinderQueries');

module.exports = {
    // Used when user presses Create in the lobby
    // The created roomId will be added to the db
    createRoom: (req, res) => {
        // roomId placeholder for roomId created in the front end and sent as a post request
        // chickenTinderQueries.createRoom is placeholder for the corresponding query
        const { roomId } = req.body;
        connection.query(chickenTinderQueries.createRoom, roomId, (err) => {
            if (err) throw err;
            return res.json(roomId);
        });
    },
    // Used when user presses Join in the lobby and enters a room Id
    // The roomId from the db will be compared to the one entered by user
    getRoomId: (req, res) => {
        connection.query(chickenTinderQueries.getRoomId, (err, roomId) => {
            if (err) throw err;
            return res.json(roomId);
        });
    },
    // Used when 2nd user joins room, prevents anyone else from joining if equal to two
    closeRoom: (req, res) => {
        connection.query(chickenTinderQueries.closeRoom, (err) => {
            if (err) throw err;
            return res.send();
        });
    },
    // Used when Create user enters a city for to find restaurants
    // Adds a restaurant to the db
    // May possibly be able to do all restaurants at the same time depending on api
    // Currently only adds restaurants to the db, might have to get them back from the db
    addRestaurant: (req, res) => {
        connection.query(chickenTinderQueries.addRestaurant, (err) => {
            if (err) throw err;
            return res.send();
        });
    },
    // Used when Join user enters the correct roomId
    // Used to display restaurants for the user
    getRestaurants: (req, res) => {
        connection.query(chickenTinderQueries.getRestaurants, (err, restaurants) => {
            if (err) throw err;
            return res.json(restaurants);
        });
    },
    // Used when either user says yes to a restaurant
    addYes: (req, res) => {
        connection.query(chickenTinderQueries.addYes, (err) => {
            if (err) throw err;
            return res.send();
        });
    },

};
