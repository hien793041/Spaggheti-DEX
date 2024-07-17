const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/artifacts', express.static(path.join(__dirname, 'artifacts')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
