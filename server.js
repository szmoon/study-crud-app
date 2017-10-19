const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const toDoController = require('./ToDoController');
// const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/www')); // is there another way to do this?

// app.get(‘/style.css’, (req, res) => {
//   res.setHeader(‘Content-Type’, ‘text/css’, ‘charset=UTF-8’);
//   res.statusCode = 200;
//   res.sendFile(‘./www/styles.css’, {root: __dirname});
//   // res.sendFile(__dirname + ‘./’ +  ‘client/style.css’);
// }

mongoose.connect('mongodb://toast:toast@ds147902.mlab.com:47902/study-crud-app');

mongoose.connection.once('open', (err, success) => {
  if (err) console.log('Error not connected');
  console.log('Connected, yay!');
});


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

const toDoRouter = express.Router();

// create
toDoRouter.post('/create', toDoController.createToDo); //any post methods on student router, go to /student

// get
toDoRouter.get('/get', toDoController.getToDos);

//update
toDoRouter.patch('/update/:id', toDoController.updateToDo);

// delete
toDoRouter.delete('/delete/:id', toDoController.deleteToDo);

app.use('/todo', toDoRouter);








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

 
