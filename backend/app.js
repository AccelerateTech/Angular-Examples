

const express = require('express');
const reload = require('reload');
const watch = require('watch');
const app = express();

app.get('/api',(req,res)=>{
    res.json({"key":"Hello World!"});
});

app.use(express.static('frontend'));

reloadServer = reload(app);
watch.watchTree(__dirname + "/frontend", function (f, curr, prev) {
    // Fire server-side reload event 
    reloadServer.reload();
});

app.listen(8080);

