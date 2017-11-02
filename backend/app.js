

const express = require('express');
const reload = require('reload');
const watch = require('watch');
const bodyParser = require("body-parser");  
const jwt = require('jwt-simple');
const auth = require('./auth')();
const config = require('./config');
const users = require('./users');


const app = express();



app.use(bodyParser.json());
app.use(auth.initialize());

app.get('/api/data',auth.authenticate(),(req,res)=>{
    res.json({
        "k1":"data1",
        "k2":"data2",
        "k3":"data3"
    });
});


app.post("/login", function(req, res) {  
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find((u)=> {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

app.use(express.static('frontend'));

app.use(function(req, res, next) {
    res.sendFile(__dirname + "/frontend/index.html");
})

reloadServer = reload(app);
watch.watchTree(__dirname + "/frontend", function (f, curr, prev) {
    // Fire server-side reload event 
    reloadServer.reload();
});

app.listen(8080);

