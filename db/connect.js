const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://tanzanco:1234@nodeexpressprojects.zz6ywry.mongodb.net/03TaskManager?retryWrites=true&w=majority';

const connectDB = (url) => {
    return  mongoose.connect(connectionString,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
    })
}

module.exports = connectDB