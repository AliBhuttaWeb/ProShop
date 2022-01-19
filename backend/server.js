const express = require('express');
const app = express();
const dotenv = require('dotenv');
const ConnectDB = require('./config/database/connection');
const Response = require('./response/response');
const { NOT_FOUND, ROUTE_NOT_FOUND_MSG } = require('./utils/constant');
const productPublicRoutes = require('./routes/public_routes/product.route');
const userPublicRoutes = require('./routes/public_routes/user.route');
const userAuthRoutes = require('./routes/auth_routes/user.route');
const orderAuthRoutes = require('./routes/auth_routes/order.route');
const userAuthAdminRoutes = require('./routes/auth_admin_routes/auth.routes');

dotenv.config();//Configuring dotenv to communicate with .env file
ConnectDB();//Establishing connection with DB

//Allowing to get body send as json, other wise req.body will return undefined
app.use(express.json());

/* ** Product Routes ** */
app.use('/api/products', productPublicRoutes);// Public(no auth) Routes

/* ** User Routes ** */
app.use('/api/users', userPublicRoutes);
app.use('/api/auth/users', userAuthRoutes);
app.use('/api/admin/users', userAuthAdminRoutes);

/* ** Order Routes ** */
app.use('/api/orders' , orderAuthRoutes);

//Route not found handling
app.use(async (req, res) => {
    res.json(Response.error(NOT_FOUND, ROUTE_NOT_FOUND_MSG));
});


const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

app.listen(port, console.log(`Backend  environment ${env} running on port ${port} ....`))