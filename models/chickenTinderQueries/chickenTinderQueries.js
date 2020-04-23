const createRoom = 'INSERT INTO room (room_number) VALUES (?);';
const getRoomId = 'SELECT closed FROM room WHERE room_number = ?;';
const addRestaurant = 'INSERT INTO restaurants (room_number, restaurant_name, restaurant_image_url) VALUES (?);';
const getRestaurants = 'SELECT restaurant_name, restaurant_image_url FROM restaurants WHERE room_number = ?;';
const closeRoom = 'UPDATE room SET closed = \'y\' WHERE room_number = ?;';
const addYes = 'UPDATE restaurant SET num_of_yes = ? WHERE room_number = ? AND restaurant_name = ?;';


module.exports = {
  createRoom,
  getRoomId,
  addRestaurant,
  getRestaurants,
  closeRoom,
  addYes
};