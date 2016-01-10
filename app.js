
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path'),
  routes = require('./routes'),
  api = require('./routes/api');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 4321);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));

app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.locals.pretty = true;
}

// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/api/name', api.name);
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
