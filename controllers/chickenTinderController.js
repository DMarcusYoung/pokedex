const connection = require('../config/connection');
// Placeholder for query files that will be in models
const chickenTinderQueries = require();

module.exports = {
    addRoomId: (req, res) => {
        // room_id is a placeholder for when we create room_id in the front end which will be sent from front end as a post request
        const { roomId } = req.body;
        connection.query(chickenTinderQueries.addRoomId, roomId, (err) => {
            if (err) throw err;
            return res.send();
        });
    },
    getRoomId: (req, res) => {
        connection.query(chickenTinderQueries.getRoomId, (err, roomId) => {
            if (err) throw err;
            return res.json(roomId);
        });
    },
};
