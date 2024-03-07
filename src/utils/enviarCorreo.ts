import nodemailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tu_correo@gmail.com',
        pass: 'tu_contraseña',
    },
    tls: {
        rejectUnauthorized: false
    }
});

interface FormData {
    nombreCompleto: string;
    telefono: string;
    correoElectronico: string;
    facultad: string;
    tipo: string;
    comentario: string;
    contacto: string[];
}

const enviarCorreo = async (formData: FormData) => {
    const mailOptions = {
        from: 'tu_correo@gmail.com',
        to: 'correo_administrador@example.com',
        subject: 'Nueva queja o sugerencia recibida',
        html: `
        <p>Nombre completo: ${formData.nombreCompleto}</p>
        <p>Teléfono: ${formData.telefono}</p>
        <p>Correo electrónico: ${formData.correoElectronico}</p>
        <p>Facultad, Escuela, Departamento, Área: ${formData.facultad}</p>
        <p>Tipo: ${formData.tipo}</p>
        <p>Comentario: ${formData.comentario}</p>
        <p>Contacto: ${formData.contacto.join(', ')}</p>
        `,
};

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw new Error('Error al enviar el correo electrónico');
    }
};

export default enviarCorreo;
