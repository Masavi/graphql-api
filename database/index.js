const mongoose = require('mongoose');

mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true },
    () => console.log('Conexion exitosa con Atlas'),
);