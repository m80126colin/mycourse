var db		= require('../model'),
	API		= require('./api');

module.exports.api = API;

module.exports.renderIndex = function(req, res) {
	var tag = {};
	var list = ['基礎', '核心', '進階', '未分類課程'];
	db.getPrimitive(function (prims) {
		db.getCourseName(function (course) {
			for (var i = 0; i < course.length; i++) {
				tag[course[i]['課名']] = [];
			}
			for (var i = 0; i < prims.length; i++) {
				for (var j = 0; j < list.length; j++) {
					var item = prims[i][list[j]];
					for (var k = 0; k < item.length; k++) {
						if (tag[item[k]]) {
							tag[item[k]].push('prim' + prims[i]['名稱']);
							tag[item[k]].push('level' + list[j]);
						}
						else {
							console.log(prims[i]['名稱'], item[k]);
						}
					}
				}
			}
			for (var i = 0; i < course.length; i++) {
				course[i].class = tag[course[i]['課名']];
			}
			res.render('index', {
				'primitive': prims,
				'course': course
			});
		});
	});
}

module.exports.renderList = function(req, res) {
	res.render('list');
}

module.exports.renderCreate = function(req, res) {
	res.render('create');
}

module.exports.renderCreate = function(req, res) {
	res.render('create');
}

module.exports.renderList = function(req, res) {
	res.render('list');
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