const mLogin = require('../models/mLogin');
const mWidget = require('../models/mWidget');
const request = require("request");
const moment = require("moment");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const nodemailer = require("nodemailer");
var randomstring = require("randomstring");
const argon2 = require('argon2');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

class Widget {

  async createWidgets(body) {
    try {
      let login = await mLogin.findOne({
        where: {
          loginCookie: body.cookie
        }
      });
      if (login == null)
        return ({success: false, error: "Account does not exist or user is not logged in"});
      const widget = await mWidget.create({
        userId: login.id,
        data: JSON.stringify(body.data),
        update: body.update
      });
      return ({success: true, data: widget});
    } catch (error) {
      console.error(error);
      return ({success: false, error: error});
    }
  }

  async getWidgets(body) {
    try {
      let login = await mLogin.findOne({
        where: {
          loginCookie: body.cookie
        }
      });
      if (login == null)
        return ({success: false, error: "Account does not exist or user is not logged in"});
      let widgets = await mWidget.findAll({
        where: {
          userId: login.id
        }
      });
      return ({success: true, data: widgets});
    } catch (error) {
      console.error(error);
      return ({success: false, error: error});
    }
  }

}

module.exports = Widget;