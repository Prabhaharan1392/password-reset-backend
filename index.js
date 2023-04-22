const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userController = require('./controller/user');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to db
async function connectDB() {
  mongoose.set('strictQuery', false);
  const result = await mongoose.connect(
    'mongodb+srv://prabhaharan1392:prabhahar6@cluster0.rk0a7ad.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  );
  console.log('DB connected');
  return result;
}
connectDB();
app.listen(5000, () => {
  console.log(`Backend Running At Port 5000`);
});
//

app.post('/signup', userController.signup);
app.post('/signin', userController.signin);
app.post('/submit-otp', userController.submitotp);
app.post('/send-otp', userController.sendotp);
