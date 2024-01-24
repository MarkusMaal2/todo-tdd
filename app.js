const express = require('express');
const todoRoutes = require("./routes/todo.routes")
const app = express();
const mongodb = require("./mongodb/mongodb.connect")
mongodb.connect();

app.use(express.json())

app.use("/todos", todoRoutes);

app.get('/', (req, res) => {
    res.send('This express application works!');
})

/*app.listen(3101, () => {
   console.log("Server is running on port 3100")
})*/

module.exports = app