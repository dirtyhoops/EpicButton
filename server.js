var express = require("express");
var app = express();
const server = app.listen(8000);
var io = require('socket.io').listen(server);
var count = 0;
io.sockets.on('connection', function(socket) {
    socket.on( "count", function(){
        count++;
        io.emit('serverResponse', count);
    });
    
    socket.on( "clear", function(){
        count = 0;
        io.emit('serverResponse', count);
    });  
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.render('index')
})






