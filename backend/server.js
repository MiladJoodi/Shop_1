const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config();

const app = require('./app');

const port = +process.env.PORT;

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('mongodb connected.');
})();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
