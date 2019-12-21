const express = require('express');
const router = express.Router();
const UsersModel = require('./../models/users');

router.get('', (req, res) => {
    UsersModel.findUsers(req, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

router.post('/add', (req, res) => {
    UsersModel.addUser(req, (error, response) => {
        if (error) {
            console.log("Error is: ", error);
            res.send(error);
        }
        if (response) {
            req.session.userName = response.userName
            console.log("Success response is: ", JSON.stringify(response));
            res.send('User added successfully');
        }
    });
});

router.post('/login', (req, res) => {
    UsersModel.findUserForLogin(req, (error, response) => {
        if (error) {
            console.log("Error is: ", error);
            res.send(error);
        }
        if (response) {
            if (response.length > 1) {
                req.session.userName = response.userName
                console.log("Success response is: ", JSON.stringify(response));
                res.send('User authenticated successfully');
            } else {
                res.status(401).send('User not authenticated');
            }
        }
    });
})

router.put('/update', (req, res) => {
    UsersModel.updateUsers(req, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
});

module.exports = router;