import { NextApiRequest, NextApiResponse } from 'next';
import enviarCorreo from '@/utils/enviarCorreo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { formData } = req.body;

        try {
            await enviarCorreo(formData);
            res.status(200).json({ message: 'Correo enviado exitosamente' });
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).json({ error: 'Error al enviar el correo electrónico' });
        }
    } else {
    res.status(405).json({ message: 'Method Not Allowed' });
}
}
