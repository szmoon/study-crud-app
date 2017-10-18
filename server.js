const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/www'));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
 
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://toast:toast@ds147902.mlab.com:47902/study-crud-app');

mongoose.connection.once('open', (err, success) => {
  if (err) console.log('Error not connected');
  console.log('Connected, yay!');
})

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});









// // get saved palettes from database
// app.get('/savedpalettes', (req, res, next) => {
//   let results;
//   // Get a Postgres client from the connection pool
//   pg.connect(uri, (err, client, done) => {
//     // Handle connection errors
//     if (err) {
//       done();
//       console.log(err);
//       return res.status(500).json({ success: false, data: err });
//     }
//     // SQL Query > Select Data
//     client.query('SELECT * FROM saved_palettes;', (err, result) => {
//     if (err) throw new Error(err);
//     console.log(result.rows);
//     return res.json(result.rows);
//     client.end();
//     });
//   });
// });

// // save to database
// app.post('/savepalette', (req, res, next) => {
//   let results;
//   const data = req.body;
//   console.log(data);
//   pg.connect(uri, (err, client, done) => {
//     if (err) {
//       done();
//       console.log(err);
//       return res.status(500).json({ success: false, data: err });
//     }

//   console.log(data.paletteName);
//     client.query('INSERT INTO saved_palettes (palette_name, square_arr) VALUES($1,$2);',
//       [data.paletteName, data.squareArr]);

//     const query = client.query('SELECT * FROM "saved_palettes";');
//     query.on('row', (row) => {
//       results = row;
//     });
//     query.on('end', function () {
//       done();
//       return res.json(results);
//     });
//   });
// });

 
