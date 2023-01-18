const mongoose = require("mongoose");

async function startConnection() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

function authenticate(handle, password) {
    return true;
}

module.exports = { authenticate };