'use strict';

const cloths = (sequelize, DataTypes) => sequelize.define('cloths', {
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

module.exports = cloths;