const express = require('express'),
  http = require('http'),
  path = require('path'),
  passport = require("passport"),
  request = require('request');
  env = process.env.NODE_ENV || 'development',
  config = require('./config/config')[env],
  session = require('express-session')

require('./config/passport')(passport, config);


var app = express();

app.set('port', config.app.port);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.json());
app.use(session
  ({
    secret: 's3Cur3'
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/routes')(app, config, passport);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
