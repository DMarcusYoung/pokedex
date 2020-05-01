const router = require('express').Router();
const chickenTinderController = require('../../controllers/chickenTinderController');
const axios = require('axios');
const _ = require('underscore');

const connection = require('./../../config/connection');
const chickenTinderQueries = require('./../../models/chickenTinderQueries/chickenTinderQueries');

// const API_BASE_URL = 'https://api.yelp.com/v3/businesses/search?term=restaurant';
// SAVE THIS TO A HIDDEN FILE ** DO NOT FINISH PROJECT WITH THIS ** 
router.route('/room')
    .get(chickenTinderController.getRoomId)
    .post(chickenTinderController.createRoom)
    .patch(chickenTinderController.closeRoom);

router.route('/restaurant')
    .get(chickenTinderController.getRestaurants)
    .post(chickenTinderController.addRestaurant)
    .patch(chickenTinderController.addYes);


router.route('/restaurant/:roomId')
    .get(chickenTinderController.getRestaurantsByRoomId);

router.route('/yelp')
    .post((req, res) => {
        const { roomId, city} = req.body;
        axios.get(`https://api.yelp.com/v3/businesses/search`, {
            headers: {
                authorization: process.env.BEARER_TOKEN
            },
            params: {
                location: city,
                term: 'Restaurants',
            },
        }).then(response => {
            const restaurantData = response.data.businesses.map(restaurant => { return {restaurant_name: restaurant.name, restaurant_image_url: restaurant.image_url, rating: restaurant.rating }});
            // console.log(response.data);
            let query = `INSERT INTO restaurants (room_number, restaurant_name, restaurant_image_url, rating) VALUES (?, ?, ?, ?)`;
            for (let i = 0; i < restaurantData.length -1; i++) {
                query += ' (?,?,?,?)';
            }
            query += ' (?,?,?,?);';
            connection.query(query, [...restaurantData], (err, result) => {
                console.log(result);
            });
        })
        .catch(e => {
            console.log(e);
        })
    });

module.exports = router;
