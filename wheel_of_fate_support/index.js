const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const AppError = require('./utils/appError');
const cors = require('cors');
const EngineersRouter = require('./routes/Engineers');
const ShiftsRouter = require('./routes/Shifts');

const apiRoute = '/api/v1';

const app = express();
app.use(cors());


//allows 100 req per hour, limit requests from sam IP
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);


//const allowedOrigins = ["http://localhost:3000","http://localhost:8080"];

/// this middleware helps us to parse json
app.use(express.json({limit: '10kb'}));

// Data sanitization against noSQL query injection
app.use(mongoSanitize());

// Data sanitization again XSS
app.use(xss());

app.get('/', (req, res) =>
{
    res.send('you are in the main page');
});
app.use(`${apiRoute}/engineers`, EngineersRouter);
app.use(`${apiRoute}/shifts`, ShiftsRouter);


app.all('*', (req, res, next) =>
{
    next(new AppError(`Can not find ${req.originalUrl} on this server!`, 404));
});


module.exports = app;
