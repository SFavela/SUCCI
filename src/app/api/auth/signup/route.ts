import { NextResponse } from "next/server";
import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import bcrypt from "bcryptjs";

function asignarRol(adscripcion: string): string{
    switch(adscripcion){
        case "ads1":
            return "rectoria";
        case  "ads2":
            return "sec-gral";
        case  "ads3":
            return "sub-sec-aca";
        case "ads4":
            return "sub-sec-admin";
        case "ads5":
            return "rectoria";
        case "ads6":
            return "rectoria";
        case "ads7":
            return "abogado";
        case "ads9":
            return "contraloria"
        case "ads10":
            return "difusion";
        case "ads11":
            return "fcfa";
        case "ads12":
            return "fts";
        case "ads13":
            return "fcq";
        case  "ads14":
            return "bellasartes";
        default:
            return "Usuario"
    }
}

function asignarsubRol(area: string): string{
    switch(area){
        case "area1":
            return "DDGRH";
        case "area2":
            return "CO";
        case "area3":
            return "CC";
        case "area4":
            return "CRP";
        case "area5":
            return "CCM";
        case "area6":
            return "CSG";
        case "area7":
            return "CPCV";
        case "area8":
            return "CGA";
        case "area9":
            return "DDC";
        case "area10":
            return "EUJED";
        case "area11":
            return "LUJED";
        case "area12":
            return "MRUJED";
        case "area13":
            return "RUJED";
        case "area14":
            return "TVUJED";
        case "area15":
            return "CDDU";
        case "area16":
            return "DVI";
        case "area17": 
            return "DTD";
        case "area18":
            return "DCN";
        case "area19":
            return "DSE";
        case "area20":
            return "DGB";
        case "area21":
            return "FCFA";
        case "area22":
            return "FTS";
        case "area23":
            return "FCQ";
        case "area24":
            return "BA"
        default:
            return "Usuario"
    }
}

export async function POST(request: Request) {

    const {nombre, correoElectronico, contrasena, apellidoPaterno, apellidoMaterno, matricula, area, adscripcion} = await request.json()
    console.log(nombre,apellidoPaterno, apellidoMaterno, matricula, area, adscripcion, correoElectronico, contrasena);

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

    const rolAsignado = asignarRol(adscripcion);
    const subrolAsignado = asignarsubRol (area);

    const hashedPassword = await bcrypt.hash(contrasena, 12)

    const user = new User({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        matricula,
        area,
        adscripcion,
        correoElectronico,
        contrasena: hashedPassword,
        role:rolAsignado,
        subrole: subrolAsignado,
    })
    const savedUser = await user.save()
    console.log(savedUser)

    return NextResponse.json({
        _id:  savedUser._id,
        nombre: savedUser.nombre,
        apellidoPaterno: savedUser.apellidoPaterno,
        apellidoMaterno: savedUser.apellidoMaterno,
        correoElectronico: savedUser.correoElectronico,
        role: savedUser.role,
        subrole: savedUser.subrole,
        mensaje:"Se ha registrado correctamente",
    });

    } catch (error) {
        console.log(error);
        return NextResponse.error();
    }
}