const Spot = require('../models/Spot');

module.exports = {
    async show(req, resp) {
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });

        return resp.json(spots);
    }
}