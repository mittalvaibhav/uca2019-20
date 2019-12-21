const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    age: Number,
    isEnabled: Boolean
})

const UsersModel = mongoose.model("Users", usersSchema, "userss");

UsersModel.findUser = function (req, callBack) {

    UsersModel.find({ userName: req.session.userName }, callBack);
}

UsersModel.findUserForLogin = function (req, callBack) {
    let user = { userName: req.body.userName, password: req.body.password };
    UsersModel.find(user, callBack);
}

UsersModel.addUser = function (req, callBack) {
    let user = req.body;
    UsersModel.create(user, callBack);
}

UsersModel.updateUsers = function (req, callBack) {
    let query = { _id: req.body._id };
    let user = req.body;
    UsersModel.updateOne(query, user, callBack);
}

module.exports = UsersModel;
