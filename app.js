const { response } = require('express');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; //set up port 3000

// Pug
app.set('views', path.join(__dirname, 'views')); // set <app_directory>/views
app.set('view engine', 'pug');

// For static files
app.use(express.static(path.join(__dirname, 'public')));

//SET UP PAGE ROUTES
app.get('/', (req, res) => {
  res.render('index', { title: 'Home | OneSeed' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About | OneSeed' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact | OneSeed' });
});

app.get('/comingsoon', (req, res) => {
  res.render('comingsoon', { title: 'Coming Soon | OneSeed' });
});

//SET UP SERVER LISTENING
app.listen(port, () => {
  console.log(`Listening port on http://localhost:${port}`);
});
