const { Schema, model } = require('mongoose');

const BaresSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    Direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
        
    },
   
});



module.exports = model( 'Bares', BaresSchema );