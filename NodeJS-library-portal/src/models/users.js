const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isEnabled: Boolean
})

const UsersModel = mongoose.model("Users", usersSchema, "users");

UsersModel.findUsers = function (req, callBack) {
    let id = req.query.id;
    let query = {};
    if (id) {
        query = { _id: id }
    }
    UsersModel.find(query, callBack);
}

UsersModel.addUsers = function (req, callBack) {
    let user = req.body;
    UsersModel.create(user, callBack);
}

UsersModel.updateUsers = function (req, callBack) {
    let query = { _id: req.body._id };
    let user = req.body;
    UsersModel.updateOne(query, user, callBack);
}

module.exports = UsersModel;
