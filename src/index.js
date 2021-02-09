const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('common'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, '0.0.0.0', console.log('listening...'));
