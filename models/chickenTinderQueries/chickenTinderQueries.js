const createRoom = 'INSERT INTO room (room_number) VALUES (?);';
const getRoomId = 'SELECT id, closed FROM room WHERE room_number = ?;';
const addRestaurant = 'INSERT INTO restaurants (room_id, restaurant_name) VALUES (?);';
const getRestaurants = 'SELECT restaurant_name FROM restaurants WHERE room_id = ?;';
const closeRoom = 'UPDATE room SET closed = \'y\' WHERE room_number = ?;';
const addYes = 'UPDATE restaurant SET num_of_yes = ? WHERE room_id = ? AND restaurant_name = ?;';


module.exports = {
  createRoom,
  getRoomId,
  addRestaurant,
  getRestaurants,
  closeRoom,
  addYes
};