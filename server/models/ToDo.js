'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  ToDo.associate = (models) => {
    models.ToDo.belongsTo(models.User, {
      // as: 'user',
      onDelete: "CASCADE",
      foreignKey: {
        // name: 'userId',
        allowNull: false
      }
    });
  };

  return ToDo;
};
