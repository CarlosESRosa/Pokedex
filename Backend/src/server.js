require('dotenv').config();
const app = require('./api');
const userController = require('./controllers/userController');
const middlewares = require('./middlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));
app.get('/user', userController.getUser);
app.post('/user', userController.postUser);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(middlewares.errorMiddleware);

app.listen(port, () => console.log('ouvindo porta', port));
