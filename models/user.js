const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: false
    },
    Apellidos: {
        type: String,
        required: [true, 'El apellido es oblicatorio']
        
    },
    Nick: {
        type: String,
        required: [true, 'El nick es obligatorio'],
        unique:true
    },
    Email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        
        
    },
    Password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    }
});



module.exports = model( 'User', UserSchema );