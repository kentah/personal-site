import express from 'express';
import cors from 'cors';
import uuidv4 from 'uuid/v4';

import 'dotenv/config';

import models, { sequelize } from './models';
import routes from './routes';


const app = express();
const PORT = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('kentah'), 
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/posts', routes.posts);
app.use('/tags', routes.tags);


const eraseDatabaseOnSync = false;

sequelize.sync().then(() => {

    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    });
});

