

var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.use(express.static('./public'));

app.get('/item', function (req, res) {
   res.json([
   		{id: 1, descricao: "Primeiro item"},
   		{id: 2, descricao: "Segundo item"},
   		{id: 3, descricao: "Terceiro item"}
   	]);
})

app.get('/erro', function(req, res) {
  res.status(404).send("Um erro aconteceu!");
});

var server = app.listen(8000, function () {
  var port = server.address().port;
  console.log("App ouvindo na porta %s", port);
})

