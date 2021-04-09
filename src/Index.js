require('./models/User');

const express= require('express');

const mongoose=require('mongoose');

const bodyParser=require('body-parser');

const authRoutes=require('./routes/authRoutes');

const app =express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri='mongodb+srv://admin:admin123456789@cluster0.qr92o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useCreateIndex:true
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error',(err)=>{
    console.error('Error connecting to mongo',err);
});

app.get('/',(req,res)=>{
    res.send('hi there!');

});
app.listen(3000,()=>{
    console.log('Listenening on port 3000');
});