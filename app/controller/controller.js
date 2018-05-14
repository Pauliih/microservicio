// const js2xmlparser = require('js2xmlparser');

exports.test = function(req, res) {
    var obj = {
        "nombre": "Morgan",
        "color": "crema",
        "edad": "5",
        "tamaño": "mediano",
        "tipoPelo": "corto"
    }
    //res: respuesta
    res.status(200).send(obj);
    // console.log(js2xmlparser.parse("cat", obj));
}