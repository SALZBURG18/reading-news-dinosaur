const express = require('express');
const morgan  = require('morgan');
const app     = express();
const PORT    = 3000;

// HTTP combie
app.use(morgan('combined'));

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Start Server
app.listen(PORT, () => {
    console.log(
        `Example app listening on port ${PORT} at http://localhost:${PORT}`
    );
});