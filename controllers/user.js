const db = require('../models/db')
const { response, request } = require('express');
const User = require('../models/user');
async function getUsers(req, res) {
    const {Nick, Password} = req.query
    const query = {Nick, Password}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
      }
   
    const users = await User.find(query)
    res.json(users)
}

function getUser(req = request, res = response) {
    const id = req.params.id
    const Users = db.users.find({ _id: id });
    if (Users.length) {
        res.json(Users);
    } else {
        res.json({ message: `El usuario ${id} no existe` })
    }

}

async function addUser(req = request, res = response) {
   
    const { Nombre, Apellidos, Nick, Email, Password } = req.body;
    const user = new User({ Nombre, Apellidos, Nick, Email, Password  });


    // Guardar en BD
    await user.save();

    res.json({
        user
    });
}

function deleteUser(req = request, res = response) {
    const userId = req.params.id;
    const removed = db.users.remove({ _id: userId });
    res.json(removed);
}

function editUser(req = request, res = response) {
    const userId = req.params.id;
    const user = req.body;
    const updatedUser = db.users.update({ _id: userId }, user);

    res.json(updatedUser);
}

module.exports = { getUsers, getUser, addUser, deleteUser, editUser }