
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const projectRouter = require('./routes/project.router');
const detailRouter = require('./routes/details.router');
const favoriteRouter = require('./routes/favorite.router')

const UploaderS3Router = require('react-dropzone-s3-uploader/s3router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/details', detailRouter);
app.use('/api/favorites', favoriteRouter)

//image upload
app.use('/s3', UploaderS3Router ({
  bucket: 'diybucket',
  region: 'us-east-2',
  headers: {'Access-Control-Allow-Origin': '*'},
  ACL: 'private',
}));

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
