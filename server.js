const express = require("express");
const path = require("path");
const db = require("./client/src/util/dbInterface");
const session = require('./client/src/util/session');
const probRetriever = require('./client/src/util/problemRetriever');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

function setRoutes() {
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
            // await probRetriever.generateProblemset(session.userHandle, session.curDifficulty);
            res.sendFile(path.join(__dirname, 'client/build', 'main.html'));
        }
    });
    
    app.get('/login', (req, res) => {
        session.curPage = "login";
        res.sendFile(path.join(__dirname, 'client/build', 'main.html'));
    });
    
    app.get('/get-current-page', (req, res) => {
        res.send({ curPage: session.curPage, curDifficulty: session.curDifficulty, userHandle: session.userHandle });
    });
    
    app.get('/submit-login-form?*', async (req, res) => {
        if (await db.authenticate(req.query.handle, req.query.password)) {
            session.userHandle = req.query.handle;
            res.redirect(`/problemset/${session.curDifficulty}`);
        }
        else {
            res.redirect('/login');
        }
    });

    app.get('/get-problemset/:userHandle/:difficulty', async (req, res) => {
        // res.send(db.getProblemset(req.params.userHandle, req.params.difficulty));
        res.send(await probRetriever.getProblems(req.params.userHandle, parseInt(req.params.difficulty)));
    });
    
    app.get('*', (req, res) => {
        res.redirect("/");
    });
}

db.startConnection().then(() => {
    setRoutes();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});