const { Sequelize } = require("sequelize");
const db = require("../config/Database");

const DataTypes = Sequelize;

const Movies = db.define(
  "movies",
  {
    id: {
      type: DataTypes.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    genres: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    photo: {
      type: DataTypes.CHAR(),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Movies;
