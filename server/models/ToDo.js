'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    IsCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  ToDo.associate = (models) => {
    models.ToDo.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ToDo;
};