//Packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var people = require('./app/data/people')
//App Settings
var app = express();
var PORT = (process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require('./app/routing/htmlRoutes')(app, __dirname);
require('./app/routing/apiRoutes')(app, people(null));

//API directions
app.post('/api/friends', function(req, res) {
    var peopleList = people(null);
    var user = req.body;
    var scoreDiff = [];
    var bestFriend = 0;       

    for (var i = 0; i < peopleList.length; i++) {
        var sum = 0;
        for (var x in peopleList[i].scores) {
            sum = sum + Math.abs(parseInt(user.scores[x]) - parseInt(peopleList[i].scores[x]));
        }
        scoreDiff.push(sum);
        if ((i > 0) && (scoreDiff[bestFriend]>scoreDiff[i])) {
            //console.log(bestFriend);
            bestFriend = i;
        }
    }
    people(user);
    res.json(peopleList[bestFriend]);
});

app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
})
