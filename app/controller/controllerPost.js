var JSONValidation = require('json-validation').JSONValidation;

exports.test1 = function (req, res) {
    console.log(req.body);
    var schema = {
        type: 'object',
        properties: {
            'key1': {
                'type': 'string',
                'required': true
            },
            'key2': {
                'type': 'string',
                'required': true
            },
            'key3': {
                'type': 'string',
                'required': true
            },
            'key4': {
                'type': 'string',
                'required': true
            },
            'key5': {
                'type': 'string',
                'required': true
            }
        }
    }
    var jv = new JSONValidation();
    var resultBodyVal = jv.validate(req.body, schema);
    if (!resultBodyVal.ok) {
        console.info('resultBodyVal:' + resultBodyVal.errors.join(", ") + " at path " + resultBodyVal.path);
        return res.status(400).send({ error: 'Error de validación' });
    }

    var k1 = req.body.key1;
    var k2 = req.body.key2;
    var k3 = req.body.key3;
    var k4 = req.body.key4;
    var k5 = req.body.key5;

    var obj = {
        "nombre": "Morgan",
        "color": "crema",
        "edad": "5",
        "tamaño": "mediano",
        "tipoPelo": "corto"
    }

    obj['keySalida'] = k1;
    obj['keySalida'] = k2;
    obj['keySalida'] = k3;
    obj['keySalida'] = k4;
    obj['keySalida'] = k5;
    //res: respuesta
    res.status(200).send(obj);
}