var express		= repuire('express');
var controller	= require('./controller')
var port		= '12345';

express()
.set('view engine', 'ejs')
.use('/public', express.static(__dirname + '/public'))
.use(express.bodyParser())
.get('/occupation/:oid/', controller.getOccupation)
.listen(port);