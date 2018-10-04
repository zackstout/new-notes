
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.use(express.static('public'));

// app.get('/clientID', (req, res) => {
//   // console.log(req);
//   const clientID = process.env.clientID;
//   res.send(clientID);
// });


app.listen(5000, () => console.log('thx for listening on port 5000'));
