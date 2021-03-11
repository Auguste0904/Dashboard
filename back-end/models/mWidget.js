const Sequelize = require('sequelize');
const db = require('../controllers/sequelize').dbcongfig;

const mWidget = db.define('Widget', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  userId: Sequelize.INTEGER,
  data: Sequelize.TEXT,
  update: Sequelize.INTEGER
});

module.exports = mWidget;