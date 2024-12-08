const express = require('express');
const app     = express();

const PORT    = 3000;

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

// Start Server
app.listen(PORT, () => {
    console.log(
        `Example app listening on port ${PORT} at http://localhost:${PORT}`
    );
});