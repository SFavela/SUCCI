import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                correoElectronico: {label: "Correo Electronico", type: "text", placeholder: ""},
                contrasena: {label:"Contraseña",type: "password"},
            },
            async authorize(credentials, req) {
                await connectDB();
                console.log(credentials)

                const userFound =  await User.findOne({correoElectronico : credentials?.correoElectronico}).select('+contrasena');
                if (!userFound) throw new Error("Credenciales Invalidas");
                console.log(userFound);

                const passwordMatch = await bcrypt.compare(credentials!.contrasena, userFound.contrasena)

                if(!passwordMatch) throw new Error("Credenciales Invalidas");

                return userFound
            },
        }),
    ],
    callbacks:{
        jwt({token,user}){
            if (user) {
                token.role = user.role;
                token.subrole = user.subrole;
            }
            return token;
        },
        session({session,token}){
            if(session?.user) {
                session.user.role = token.role;
                session.user.subrole = token.subrole
            }
            return session;
        }
    },
    pages: {
        signIn: '/login'
    },
});

export { handler as GET, handler as POST };