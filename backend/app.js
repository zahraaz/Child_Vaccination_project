const express = require('express');

const app = express();
require('dotenv').config();

const isAuth = require('./middlewares/isAuth');

const childRoutes = require('./Routes/child')
const vaccinationRoutes = require('./Routes/vaccination')
const authenticationRoutes = require('./auth/route/')
const addressRoutes = require('./Routes/address')
const medicalCenterRoute = require('./Routes/medicalCenter')
const nurseRoute = require('./Routes/nurse')
const transforamtionRoute = require('./Routes/transformation')
const vaccineInfoRoute = require('./Routes/vaccineInfo')

// ! U can use the middleware anywhere inside the express app
// app.use(express.json()) 

const { createConnection } = require("typeorm");

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "CHILD_VACCINE",
    entities: [
        require('./Entity/child'),
        require('./Entity/vaccination'),
    ],
    logger: 'simple-console',

    synchronize: true,
}).then(connection => {
    app.use('/', authenticationRoutes)

    // app.use(isAuth);

    app.use('/children', childRoutes)
    app.use('/vaccinations', vaccinationRoutes)
    app.use('/address',addressRoutes)
    app.use('/medicalCenter',medicalCenterRoute)
    app.use('/nurse',nurseRoute)
    app.use('/transforamtion',transforamtionRoute)
    app.use('/vaccineInfo',vaccineInfoRoute)

    app.listen(3000, 'localhost', () => {
        console.log("the server link is " + 'http://localhost:3000');
    })
}).catch(error => console.log(error));