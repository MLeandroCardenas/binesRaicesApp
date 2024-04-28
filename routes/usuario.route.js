import express from 'express';

const router = express.Router();

router.get('/nosotros', ( req, resp ) => {
    resp.send('Información sobre nosotros');
});

router.route('/')
    .get( ( req, resp ) => {
        resp.json({
            msg: 'Bienvenido',
            code: 200
        });
    })
    .post( ( req, resp ) => {
        resp.json({
            msg: 'Respuesta tipo Post',
            code: 201
        });
    });

export default router;