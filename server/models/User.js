'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = (models) => {
    models.User.hasMany(models.ToDo);
  };

  return User;
};