const express = require("express");
const path = require("path");
const db = require("./client/src/util/dbInterface");
const session = require('./client/src/util/session');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    session.curPage = "home";
    res.sendFile(path.join(__dirname, 'client/build', 'main.html'));
});

app.get('/problemset/:difficulty', (req, res) => {
    session.curPage = "difficulty" + req.params.difficulty;
    session.curDifficulty = parseInt(req.params.difficulty);
    if (session.userHandle === "UNKNOWN_USER")
        res.redirect("/login");
    else {
        res.sendFile(path.join(__dirname, 'client/build', 'main.html'));
    }
});

app.get('/login', (req, res) => {
    session.curPage = "login";
    res.sendFile(path.join(__dirname, 'client/build', 'main.html'));
});

app.get('/get-current-page', (req, res) => {
    res.send({ curPage: session.curPage, curDifficulty: session.curDifficulty });
});

app.get('/submit-login-form?*', (req, res) => {
    if (db.authenticate(req.query.handle, req.query.password)) {
        session.userHandle = req.query.handle;
        res.redirect(`/problemset/${session.curDifficulty}`);
    }
    else {
        res.redirect('/login');
    }
});

app.get('*', (req, res) => {
    res.redirect("/");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});