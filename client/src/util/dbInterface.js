const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const problemsetSchema = new mongoose.Schema({
    difficulty: Number,
    problems: [{
        problemId: String,
        problemName: String,
    }],
});

const userSchema = new mongoose.Schema({
    handle: String,
    password: String,
    generatedProblemsets: [problemsetSchema],
});

let dbConnection;
let User;

async function startConnection() {
    dbConnection = await mongoose.connect('mongodb://127.0.0.1:27017/users');
    User = dbConnection.model('User', userSchema);
}

async function getUser(handle) {
    return await User.findOne({ handle: handle }).clone();
}

function hashPassword(password) {
    return password;
}

async function authenticate(handle, password) {
    const user = (await getUser(handle));
    return user && hashPassword(password) == user.password;
}

async function addProblemset(userHandle, problemsetDifficulty, problemset) {
    const user = (await getUser(userHandle));
    // console.log(user.generatedProblemsets);
    user.generatedProblemsets.push({
        difficulty: problemsetDifficulty,
        problems: problemset
    });
    await User.updateOne({ handle: userHandle }, { generatedProblemsets: user.generatedProblemsets }, (err, obj) => {
        if (err)
            console.log(err);
    }).clone();
}

async function getProblemset(userHandle, problemsetDifficulty) {
    const user = (await getUser(userHandle));
    // console.log(user.generatedProblemsets);
    for (let problemset of user.generatedProblemsets) {
        if (problemset.difficulty === problemsetDifficulty) {
            return problemset.problems;
        }
    }
    return "PROBLEMSET_NOT_FOUND";
}

module.exports = { authenticate, addProblemset, getProblemset, startConnection };