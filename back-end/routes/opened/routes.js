const express = require('express');
const router = express.Router();
const Login = require('../../controllers/login');
const Widget = require('../../controllers/widget');
const multer = require('multer');
var randomstring = require("randomstring");
var path = require('path');
var cors = require('cors');
var ip = require("ip");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, randomstring.generate(9) + new Date().getMilliseconds() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

var corsOptions = {
    origin: '*'
}

router.get("/about.json", cors(corsOptions), async (req, res) => {
    let externalIp = ip.address();
    res.json({
        client: {
            host: externalIp,
        },
        server: {
            current_time: Date.now(),
            services: [
                {
                    name: "weather",
                    widgets: [
                        {
                            name: "city_information",
                            description: "Display information about weather for a city",
                            params: [
                                {
                                    name: "city",
                                    type: "string"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "my_instant",
                    widgets: [
                        {
                            name: "my_instant",
                            description: "Display the list of different buzzers that make sound when clicking on them",
                            params: [
                                {
                                    name: "name",
                                    type: "string"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "covid",
                    widgets: [
                        {
                            name: "covid-total",
                            description: "Display information about total contaminated by the COVID-19 in a specific country",
                            params: [
                                {
                                    name: "name",
                                    type: "string"
                                }
                            ]
                        },
                        {
                            name: "covid-global",
                            description: "Display information about total contaminated by the COVID-19 in the world"
                        }
                    ]
                },
                {
                    name: "time",
                    widgets: [
                        {
                            name: "time_zone",
                            description: "Display information about time in a specific country",
                            params: [
                                {
                                    name: "name",
                                    type: "string"
                                }
                            ]
                        },
                        {
                            name: "time",
                            description: "Display information about time"
                        }
                    ]
                },
                {
                    name: "drive",
                    widgets: [
                        {
                            name: "google_drive",
                            description: "Display information about a specific file",
                            params: [
                                {
                                    name: "fileName",
                                    type: "string"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "IMDb",
                    widgets: [
                        {
                            name: "IMDb",
                            description: "Display information about a specific film",
                            params: [
                                {
                                    name: "name",
                                    type: "string"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    })
});

router.post("/account/createWidget", cors(corsOptions), async (req, res) => {
    const w = new Widget();
    try {
        const value = await w.createWidgets(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.post("/account/widgets", cors(corsOptions), async (req, res) => {
    const w = new Widget();
    try {
        const value = await w.getWidgets(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.post("/account/loginGoogle", cors(corsOptions), async (req, res) => {
    const l = new Login();
    try {
        const value = await l.loginGoogle(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.post("/account/create", cors(corsOptions), async (req, res) => {
    const l = new Login();
    try {
        const value = await l.create(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.post("/account/login", cors(corsOptions), async (req, res) => {
    const l = new Login();
    try {
        const value = await l.login(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.get("/account/validate/:id", cors(corsOptions), async (req, res) => {
    const l = new Login();
    try {
        const value = await l.validate(req.params);
        res.send(value);
        //        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.post("/account/forgot", cors(corsOptions), async (req, res) => {
    const l = new Login();
    try {
        const value = await l.forgotPassword(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.post("/account/newPassword", cors(corsOptions), async (req, res) => {
    const l = new Login();
    try {
        const value = await l.newPassword(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

router.post("/account/isLoggedIn", cors(corsOptions), async (req, res) => {
    const l = new Login();
    try {
        const value = await l.isLoggedIn(req.body);
        res.json(value);
    } catch (err) {
        console.error("error: ", err);
        res.json(err);
    }
});

module.exports = router;