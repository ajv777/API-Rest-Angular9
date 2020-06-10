const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// IMP: para que funcionen luego las peticiones
const cors = require ('cors');

const apiRouter = require('./routes/api');

// Cargo las variables de entorno (el .env vinculado con db.js)
require('dotenv').config();

const app = express();

// Creamos la conexión con la base de datos 
require('./db').connect();

// Query de prueba para ver si va. Levanto la aplicación con npm run startdev y en el console.log me tienen que salir los clientes de la bd BORRAR, QUE VA BIEN

/* db.query('select * from empleados', (err, rows) => {
  if (err) console.log (err);
  console.log (rows);
}); */


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// IMP el tema de las cors
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Delego las peticiones que entren con /api a apiRouter
app.use('/api', apiRouter);

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
