const express = require('express');
const sequelize = require('./config/database');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
app.use(express.json());

// Use profile routes
app.use(profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync();
});
