import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {

    const {nombre, correoElectronico, contrasena, apellidoPaterno, apellidoMaterno, matricula, area, adscripcion,rol} = await request.json()
    console.log(nombre,apellidoPaterno, apellidoMaterno, matricula, area, adscripcion, correoElectronico, contrasena,rol);

    if (!contrasena || contrasena.length < 8 ) 
    return NextResponse.json({
        message: "La contraseña debe tener al menos 8 caracteres"
    }, {
        status: 400
    }
    );

    try {
        await connectDB();
        const userFound = await User.findOne({correoElectronico});

    if  (userFound) return NextResponse.json({
        message: "El correo electronico esta asociado a una cuenta"
    }, {
        status: 409
    }
    );

    const hashedPassword = await bcrypt.hash(contrasena, 12)

    const user = new User({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        matricula,
        area,
        adscripcion,
        correoElectronico,
        rol,
        contrasena: hashedPassword
    })
    const savedUser = await user.save()
    console.log(savedUser)

    return NextResponse.json({
        _id:  savedUser._id,
        nombre: savedUser.nombre,
        apellidoPaterno: savedUser.apellidoPaterno,
        apellidoMaterno: savedUser.apellidoMaterno,
        correoElectronico: savedUser.correoElectronico,
    });

    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}