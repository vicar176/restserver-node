const jwt = require('jsonwebtoken');
////////////////////
// Verificar token//
////////////////////



let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: 'Token no valido'
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
};


let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE')
        next();
    else {
        return res.status(401).json({
            ok: false,
            err: 'No es Administrador'
        });
    }
};


module.exports = {
    verificaToken,
    verificaAdminRole
}