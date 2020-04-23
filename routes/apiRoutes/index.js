const router = require('express').Router();
const chickenTinderController = require('../../controllers/chickenTinderController')

router.route('/room')
    .get(chickenTinderController.getRoomId)
    .post(chickenTinderController.createRoom)
    .patch(chickenTinderController.closeRoom);

router.route('/restaurant')
    .get(chickenTinderController.getRestaurants)
    .post(chickenTinderController.addRestaurant)
    .patch(chickenTinderController.addYes);

module.exports = router;
