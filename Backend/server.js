const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use('/artifacts', express.static(path.join(__dirname, 'Artifacts')));
app.use('/', (req, res) => {
  res.send("server is running")
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
