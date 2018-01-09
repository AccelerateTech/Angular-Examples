
import * as express from 'express';
import * as reload from 'reload';
import * as watch from 'watch';
import * as bodyParser from 'body-parser';
import * as jwt from 'jwt-simple';
import axios from 'axios';
import authClass from './auth';
import config from './config';
import users from './users';
import groups from './groups';


const app = express();
const auth = authClass();

app.use(bodyParser.json());
app.use(auth.initialize());

app.get('/api/groups',auth.authenticate(),(req,res)=>{
    res.json(groups);
});

app.get('/api/users',auth.authenticate(),(req,res)=>{
    res.json(users);
});

app.post("/api/login", function(req, res) {  
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

app.post("/api/login/facebook", function(req, res) {  
    if (req.body.access_token) {
        var accessToken = req.body.access_token;
        
        axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
        .then((data)=>{
            if(!data.data.error){
                var payload = {
                    id: accessToken
                };
                users.push({
                    id: accessToken,
                    name: "Facebook User",
                    email: "placeholder@gmail.com",
                    password: "123456"
                })
                var token = jwt.encode(payload, config.jwtSecret);
                res.json({
                    token: token
                });
            }else{
                res.sendStatus(401);
            }
        }).catch((err)=>{
            console.log(err);
            res.sendStatus(401);
        });
    } else {
        res.sendStatus(401);

    }
});

// Reloading the backend when backend is changed.
let reloadServer = reload(app);

watch.watchTree(__dirname + "/frontend/dist", function (f, curr, prev) {
    // Fire server-side reload event 
    reloadServer.reload();
});

app.use(express.static('frontend/dist'));

app.use(function(req, res, next) {
    res.sendFile(__dirname + "/frontend/dist/index.html");
})



app.listen(8080);

