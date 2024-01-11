const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This express application works!');
})

app.listen(3100, () => {
    console.log("Server is running on port 3100")
})