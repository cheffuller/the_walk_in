const express = require('express');
// const https = require('https');
// var fs = require('fs');
const cors = require('cors');
const sequelize = require('./models/index.js');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'https://localhost:3000', // URL of the frontend
};

app.use(cors(corsOptions));
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

require('./routes/company.routes.js')(app);
require('./routes/address.routes.js')(app);
require('./routes/user.routes.js')(app);
require('./routes/cart.routes.js')(app);
require('./routes/delivery.routes.js')(app);
require('./routes/vendor.routes.js')(app);
require('./routes/product.routes.js')(app);
require('./routes/cart__product.routes.js')(app);
require('./routes/company__vendor.routes.js')(app);
require('./routes/auth.routes.js')(app);

const PORT = process.env.PORT || 8080; // Port

// const options = {
//   // key: fs.readFileSync(process.env.KEY),
//   // cert: fs.readFileSync(process.env.CERT),
// };

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

  // https.createServer(options, app).listen(PORT, () => {
  //   console.log(`Server is running on port ${PORT}.`);
  // });
});
