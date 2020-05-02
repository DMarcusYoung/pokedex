const createRoom = 'INSERT INTO room (room_number) VALUES (?);';
// const getRoomId = 'SELECT closed FROM room WHERE room_number = ?';
const getRoomId = 'SELECT * FROM room;';

const addRestaurant = 'INSERT INTO restaurants (room_number, restaurant_name, restaurant_image_url, rating, city) VALUES (555, ?, ?, ?);';

const getRestaurants = 'SELECT id, restaurant_name, restaurant_image_url, num_of_yes FROM restaurants WHERE room_number = ?;';
const closeRoom = 'UPDATE room SET closed = \'y\' WHERE room_number = ?;';
const addYes = 'UPDATE restaurants SET num_of_yes = ? WHERE id = ?;';

const getRestaurantsByRoomId = 'SELECT restaurants.id, restaurants.room_number, restaurants.restaurant_name, restaurants.restaurant_image_url, restaurants.rating, restaurants.num_of_yes, restaurants.city, room.closed FROM restaurants INNER JOIN room ON room.room_number = restaurants.room_number WHERE room.room_number = ? GROUP BY restaurants.restaurant_name;';
const getRestaurantByRestId = 'SELECT * FROM restaurants WHERE id = ?;';


module.exports = {
    createRoom,
    getRoomId,
    addRestaurant,
    getRestaurants,
    closeRoom,
    addYes,
    getRestaurantsByRoomId,
    getRestaurantByRestId,
};
