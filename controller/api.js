var db		= require('../model');

module.exports.getOccupation = function(req, res) {
	var oid = req.param('oid');
	db.getOccupation(oid, function (occupation) {
		console.log(occupation);
		res.json(occupation);
	});
}