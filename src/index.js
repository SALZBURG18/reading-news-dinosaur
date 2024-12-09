const express    = require('express');
const morgan     = require('morgan');
const path       = require('path');
const handlebars = require('express-handlebars');
const app        = express();
const PORT       = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP combie logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
  }));
  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'resources/views'));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

// Start Server
app.listen(PORT, () => {
    console.log(
        `Example app listening on port ${PORT} at http://localhost:${PORT}`
    );
});