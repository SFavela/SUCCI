import { Schema, model, models } from "mongoose";

const userSchema = new Schema ({
    nombre: {
        type: String,
        required: [true, "Nombre requerido"], 
        maxLength: 50
    },
    apellidoPaterno:{
        type:String,
        required: true,
        maxLenght: 50
    },
    apellidoMaterno:{
        type:String,
        required: true,
        maxLenght: 50
    },
    matricula:{
        type: Number,
        unique: true,
        required: [true, "Matrícula requerida"], 
    },
    area:{
        type: String,
    },
    adscripcion:{
        type: String,
    },
    correoElectronico:{
        type: String,
        required:[true,"Correo electronico requerido"] ,
        unique: true,
    },
    contrasena:{
        type: String,
        required:[true,"Contraseña requerida"] ,
        select:false, //No se muestra en consultas a BD
        minLength:8,
    },
    rol: {
        type: String,
        enum: ['rectoria', 'sec-gral', 'sub-sec-aca','sub-sec-admin', 'abogado', 'bellasartes', 'contraloria', 'difusion', 'fcfa', 'fcq', 'fts', 'tesoreria'],
        default: 'Usuario'
    },
});

const User = models.User || model( 'User', userSchema );
export default User;

