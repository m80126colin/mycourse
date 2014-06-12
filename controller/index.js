var db		= require('../model'),
	API		= require('./api');

module.exports.api = API;

module.exports.renderIndex = function(req, res) {
	res.render('index');
}

module.exports.renderOccupation = function(req, res) {
	var oid = req.param('oid');
	console.log(oid);
	db.getOccupation(function (occupation) {
		console.log(occupation);
		res.json(occupation);
	});
	/*
	var args		= {
		'title': 'Search ' + occupation.name,
	}
	res.render('occupation', args);
	*/
	
}