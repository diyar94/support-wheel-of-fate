const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./index');


const db = process.env.DATABASE
                  .replace('<PASSWORD>', process.env.DATABASE_PASSWORD);


//connect method returns a PROMISE
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('Db connection successful!'));



const port = 4000;


const server = app.listen(port, () =>
{
    console.log('Server started');
    console.log(`App Running on port ${port}...`);
});

process.on('unhandledRejection', err =>
{
    console.log(err.name, err.message);
    console.log('Uncaught Exception! Shutting down.....');
    server.close(() =>
    {
        process.exit(1);
    });
});




