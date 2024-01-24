const mongoose = require("mongoose")

async function connect() {
    try {
        console.log("Connecting to MongoDB...")
        await mongoose.connect(
            "mongodb://user:password@127.0.0.1:27017/tests",
            { useNewUrlParser: true }
        );
        console.log("Connection established!")
    } catch (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
    }
}

module.exports = { connect };