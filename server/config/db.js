const mongoose = require('mongoose');

const connect = async () => {
    try {
        const response = await mongoose.connect('mongodb+srv://admin:admin@cluster0.lgp4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
       console.log("Connected");
    } catch (error) {
        console.log(error);
    }  
}
module.exports=connect;