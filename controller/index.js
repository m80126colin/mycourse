var db		= require('../model');

module.exports.getOccupation = function(req, res) {
	var oid		= req.params('oid');
	var result	= db.getOccupation(oid);
	var args	= {
		'title': 'Search ' + result.occupation_name,
	}
	res.render('occupation', args);
}