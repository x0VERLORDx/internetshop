const express = require('express');
const app = express();

const titlesData = {
  title1: 'Новые поступления в этом сезоне',
  title2: 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.',
};

app.get('/api/titles', (req, res) => {
  res.json(titlesData);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});