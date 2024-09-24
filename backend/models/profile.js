const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  name: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, allowNull: false },
  about: { type: DataTypes.TEXT },
  bio: { type: DataTypes.TEXT },
  location: { type: DataTypes.STRING },
  followerCount: { type: DataTypes.INTEGER },
  connectionCount: { type: DataTypes.INTEGER },
  bioLine: { type: DataTypes.TEXT },
});

module.exports = Profile;
