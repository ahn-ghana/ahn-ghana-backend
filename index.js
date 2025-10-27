const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "🌿 AHN Ghana Backend (Node) Active", status: "OK", version: "1.0.0" });
});

app.get('/api/herbs', (req, res) => {
  const herbs = [
    { name: "Moringa", region: "Northern Ghana", price_per_kg: 12.5 },
    { name: "Aloe Vera", region: "Central Region", price_per_kg: 9.8 },
    { name: "Prekese", region: "Eastern Region", price_per_kg: 7.2 }
  ];
  res.json(herbs);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
