'use strict';

const food = (sequelize, DataTypes) => sequelize.define('food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typefood: {
    type: DataTypes.STRING,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = food;