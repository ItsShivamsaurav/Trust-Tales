const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const { checkForAuthenticationCookie } = require('./middlewares/authentication');
const userRouter = require('./routes/userroutes');
const diaryRouter = require('./routes/diaryroutes');

const app = express();
app.use(cors());

const port = 3000;

mongoose.connect('mongodb://localhost:27017/Trust_tales')
.then(()=> console.log("Connected to MongoDb."))
.catch((err)=> console.log("Error ",err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));


app.use('/user',userRouter);
app.use('/user/diary',diaryRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
} 
);  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});