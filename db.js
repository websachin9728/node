const mongoose = require('mongoose');


const mogodbURL = "mongodb://127.0.0.1:27017/demo"

mongoose.connect(mogodbURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

const db = mongoose.connection;


db.on('connected',() => {
    console.log('Connected to Mongoos Db')
});
db.on('error',(err) => {
    console.error('mongo db connection erros',err);
});
db.on('disconnected',() => {
    console.log('Connection Dissconnect');
});

module.exports = db;