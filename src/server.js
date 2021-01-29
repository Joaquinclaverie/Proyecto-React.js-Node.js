const { response } = require('express');
const express = require('express');
const app = express();
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// Config
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/api', (req, res) => {
    res.json({api: 'Works!'});
});

// Levantando servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});