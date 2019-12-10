var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var parentRouter = require('./routes/parent');
var cors = require('cors');
var app = express();

app.use(cors({
  origin: 'http://localhost:3001'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/', parentRouter);
app.use('/stu', parentRouter);
app.use('/score', parentRouter);
app.use('/user', parentRouter);
app.use('/skill', parentRouter);
app.use('/topic', parentRouter);
app.use('/category', parentRouter);
app.use('/student', parentRouter);
app.use('/parent', parentRouter);
app.use('/teacher', parentRouter);
app.use('/scorebd', parentRouter);
app.use('/sessions', parentRouter);
app.use('/users', usersRouter);
app.use('/avgscore', usersRouter);
app.use('/avgscore1', usersRouter);
app.use('/avgtime', usersRouter);
app.use('/avgtime1', usersRouter);
app.use('/totalques', usersRouter);
app.use('/totalques1', usersRouter);
app.use('/avgcat', usersRouter);
app.use('/avgcat1', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;