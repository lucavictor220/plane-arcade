const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html');
})

app.listen(3000, () => {
  console.log("App is on the port 3000!")
})
