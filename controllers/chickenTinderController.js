const connection = require('../config/connection');
const chickenTinderQueries = require('../models/chickenTinderQueries/chickenTinderQueries');

module.exports = {
    // Used when user presses Create in the lobby
    // The created roomId will be added to the db
    createRoom: (req, res) => {
        // roomId placeholder for roomId created in the front end and sent as a post request
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
    // Used when there is a match so the room cannot be entered again
    closeRoom: (req, res) => {
        const { roomNumber } = req.body;
        connection.query(chickenTinderQueries.closeRoom, roomNumber, (err) => {
            if (err) throw err;
            res.send();
        });
    },
    // Used when Create user enters a city for to find restaurants
    // Adds a restaurant to the db
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
        const { restId } = req.body;
        connection.query(chickenTinderQueries.getRestaurantByRestId, restId, (err, data) => {
            if (err) res.json(err);
            if (data[0].num_of_yes === 0) {
                connection.query(chickenTinderQueries.addYes, [1, restId], (error) => {
                    if (error) throw error;
                });
            }
            if (data[0].num_of_yes === 1) {
                connection.query(chickenTinderQueries.addYes, [2, restId], (error) => {
                    if (error) throw error;
                });
            }
            connection.query(chickenTinderQueries.getRestaurantByRestId, restId, (error, updatedData) => {
                if (error) res.json(error);
                res.json(updatedData[0]);
            });
        });
    },
    getRestaurantsByRoomId: (req, res) => {
        const { roomId } = req.params;
        connection.query(chickenTinderQueries.getRestaurantsByRoomId, roomId, (err, restaurants) => {
            if (err) throw err;
            return res.json(restaurants);
        });
    },
    getRestaurantById: (req, res) => {
        const { restId } = req.params;
        connection.query(chickenTinderQueries.getRestaurantByRestId, restId, (err, restaurants) => {
            if (err) throw err;
            return res.json(restaurants[0]);
        });
    },
};
