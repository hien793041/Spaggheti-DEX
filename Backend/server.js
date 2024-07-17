const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/artifacts', express.static(path.join(__dirname, 'artifacts')));
app.use('/', (req, res) => {
  res.send("server is running")
});
app.get('/api/spagghetiDex', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'artifacts', 'spagghetiDEX.json');
    // You can use fs.readFile to read the file content if needed
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error fetching spagghetiDex.json:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
