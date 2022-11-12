const db = require('../models/db')
const { response, request } = require('express');
const Bares = require('../models/bares');
async function getBares(req, res) {
    const {Nombre, Direccion} = req.query
    const query = {Nombre, Direccion}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
      }
   
    const bares = await Bares.find(query)
    res.json(bares)
}

function getBar(req = request, res = response) {
    const id = req.params.id
    const bares = db.bares.find({ _id: id });
    if (bares.length) {
        res.json(bares);
    } else {
        res.json({ message: `El bar ${id} no existe` })
    }

}

async function addBar(req = request, res = response) {
   
    const { Nombre, Direccion} = req.body;
    const bares = new Bares({ Nombre, Direccion });


    // Guardar en BD
    await bares.save();

    res.json({
        bares
    });
}

function deleteBar(req = request, res = response) {
    const barId = req.params.id;
    const removed = db.bares.remove({ _id: barId });
    res.json(removed);
}

function editBar(req = request, res = response) {
    const barId = req.params.id;
    const bar = req.body;
    const updatedBar = db.bares.update({ _id: barId }, Bar);

    res.json(updatedBar);
}

module.exports = { getBares, getBar, addBar, deleteBar, editBar }