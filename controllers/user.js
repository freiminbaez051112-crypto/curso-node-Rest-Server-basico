const { request } = require("express");

const { response } = ('express');


const usuariosGet = (req, res) => {
    res.json({
        msg:'get API - controlador'
    });
}


const usuariosPost = (req, res) => {
    const id = req.params.id;

    const { nombre, edad } = request.body;

    res.json({
        msg:'post API - controlador',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res) => {
    res.json({
        msg:'put API - controlador'
    });
}
const usuariosPatch = (req, res) => {
    res.json({
        msg:'patch API - controlador'
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        msg:'delete API - controlador'
    });
}




module.exports = {
    usuariosGet,  
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,

}