const ejs = require('ejs');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    const data = {
      title: 'My EJS App',
      heading: 'Welcome to EJS',
      content: 'This is a sample EJS template.'
    };
    res.render('index', data);
  });
  
  app.listen(3000, () => {
    console.log('App listening on port 3000');
  });
  