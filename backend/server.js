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
const userAuthAdminRoutes = require('./routes/auth_admin_routes/user.routes');
const orderAuthAdminRoutes = require('./routes/auth_admin_routes/order.routes');
const uploadAuthRoutes = require('./routes/auth_admin_routes/upload.routes');
const path = require('path');

dotenv.config();//Configuring dotenv to communicate with .env file
ConnectDB();//Establishing connection with DB

/* ** Multer Configuration ** */
const multer  = require('multer')
const upload = multer()

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
app.use('/api/admin/orders', orderAuthAdminRoutes);

/* ** Upload Routes** */
app.use('/api/admin/upload', uploadAuthRoutes);

/* ** Retrieving Image ** */
app.get('/image/:name', (req, res) => { //Accessing image example <img src="/image/profile.png" />
    return res.sendFile(path.join(__dirname, `../public/uploads/images/${req.params.name}`));
});

//Route not found handling
app.use(async (req, res) => {
    res.json(Response.error(NOT_FOUND, ROUTE_NOT_FOUND_MSG));
});


const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

app.listen(port, console.log(`Backend  environment ${env} running on port ${port} ....`))