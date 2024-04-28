const formularioLogin = ( req, resp ) => {
    resp.render('auth/login', {
    });
}

const formularioRegistro = ( req, resp ) => {
    resp.render('auth/registro', {
        pagina: 'Crear Cuenta'
    });
}

export {
    formularioLogin,
    formularioRegistro
}