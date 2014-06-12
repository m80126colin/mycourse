var express		= require('express');
var path		= require('path');
var controller	= require('./controller');
var public_dir	= __dirname + '/public';
var package_dir	= __dirname + '/node_modules';
var port		= 5000;
var app			= express();

// all environments
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
/*
 *
 *	public source
 *
 */
app.use('/public', express.static(__dirname + '/public'));
/*
 *
 *	pages
 *
 */
app.get('/', controller.renderIndex);
app.get('/list/occupation', controller.renderList);
app.get('/create/occupation', controller.renderCreate);
app.get('/occupation/:oid', controller.renderOccupation);
/*
 *
 *	apis
 *
 */
app.get('/api/oid/:oid', controller.api.getOccupation);
/*
app.get('/api/tags', controller.getTags);
app.get('/api/newsline/:tag', controller.getNewsByTag);
*/
/*
 *
 *	admin
 *
 */
// app.get('/admin', controller.renderAdmin);
/*
 *
 *	listen
 *
 */
app.listen(port);