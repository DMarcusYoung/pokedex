const router = require('express').Router();
const chickenTinderController = require('../../controllers/chickenTinderController')

router.route('/room')
    .get(chickenTinderController.getRoomId)
    .post(chickenTinderController.createRoom);

router.route('/restaurant')
    .get(chickenTinderController.getRestaurants)
    .post(chickenTinderController.addRestaurant);

module.exports = router;
