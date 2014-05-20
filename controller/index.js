var db		= require('../model');

module.exports.getOccupation = function(req, res) {
	var oid			= req.params('oid');
	var occupation	= db.getOccupation(oid);
	var args		= {
		'title': 'Search ' + occupation.name,
	}
	res.render('occupation', args);
}