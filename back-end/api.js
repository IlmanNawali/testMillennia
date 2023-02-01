const express       = require('express');
const cors = require('cors');
const path          = require("path");
const fs            = require("fs");
require('dotenv').config();
var fileType        = require('./library/fileType');
var images          = path.join(__dirname, 'images');
require('dotenv').config();
var bodyParser    = require('body-parser')
const app         = express();
// parse application/json
app.use(bodyParser.json())
var barangPost = require('./service/barangPost');
var barangGet = require('./service/barangGet');
var deleteBarang = require('./service/barangDelete');
var barangGetDetail = require('./service/barangDetail');
var barangPut = require('./service/barangPut');
var login = require('./service/login');
var getImage = require('./service/getImage');
app.use(express.json());
app.use(cors());
app.get('/barang/:id',barangGetDetail )
app.post('/barang', barangPost)
app.get('/barang', barangGet)
app.put('/barang', barangPut)
app.delete('/barang/:id', deleteBarang)
app.get('/login', login)
app.get('/getImage',getImage)
// app.post('/upload', userUpload)


app.get('/images/:file', (req, res) => {
  var file        = req.params.file;
  var extname     = path.extname(file);
  var targetfile = path.join(images, file);
  fs.readFile(targetfile, function(error, content) {
      res.writeHead(200, { 'Content-Type': fileType(extname.replace(".", "")) });
      res.end(content, 'utf-8');
  });
})
app.listen(process.env.PORT_API, () => {
  console.log(`Example app listening on port ${process.env.PORT_API}`)
})