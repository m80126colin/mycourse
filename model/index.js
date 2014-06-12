var mongoClient	= require('mongodb').MongoClient,
	format		= require('util').format,
	ObjectId	= require('mongodb').ObjectID,
	url			= require('./config').getUrl();

var occu		= 'OccupationList';

/*
	Return value:
		Object
	Attribute:
		- name
		- task_list
		- prim_list
		- class_list
			* name
			* prims
*/
module.exports.getOccupation = function(oid, callback) {
	mongoClient.connect(url, function (e, db) {
		if (e) throw e;
		db.collection('OccupationList', function (e, col) {
			col.find().toArray(function (e, data) {
				callback(data);
				db.close();
			})
		});
		/*
		db.collection('TaskList')
		.find()
		.toArray(function (data) {
			callback(data);
		});
*/
	});
}

module.exports.getPrimitive = function(callback) {
	mongoClient.connect(url, function (e, db) {
		if (e) throw e;
		db.collection('PrimitiveList', function (e, col) {
			col
			.find()
			.toArray(function (e, data) {
				callback(data);
				db.close();
			})
		});
	});
}

module.exports.getCourseName = function(callback) {
	mongoClient.connect(url, function (e, db) {
		if (e) throw e;
		db.collection('CourseName', function (e, col) {
			col
			.find()
			.toArray(function (e, data) {
				callback(data);
				db.close();
			})
		});
	});
}