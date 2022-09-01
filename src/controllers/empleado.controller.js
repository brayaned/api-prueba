import { Empleado } from '../models/empleado.model.js'

export const GetAll = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json({
            Success: true,
            Status: "200",
            Message: 'Request successful',
            Data: empleados
        });  
    } catch (error) {
        return res.status(500).json({
            Success: false,
            Status: "500",
            Message: error.message,
        })
    }

};


export const GetByCodigo = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        const empleado = await Empleado.findByPk(codigo);
        res.json({
            Success: true,
            Status: "200",
            Message: 'Request successful',
            Data: empleado
        });
    } catch (error) {
        return res.status(500).json({
            Success: false,
            Status: "500",
            Message: error.message,
        })
    }
};

export const Post = async (req, res) => {
    const { codigo, nif , nombre, apellido_1, apellido_2 , codigo_departamento } = req.body;
    try {
        const newEmpleado = await Empleado.create({
            codigo,
            nif,
            nombre,
            apellido_1,
            apellido_2,
            codigo_departamento
        });
        res.json({
            Success: true,
            Status: "201",
            Message: 'Registration successful',
            Data: newEmpleado
        });
    } catch (error) {
        return res.status(500).json({
            Success: false,
            Status: "500",
            Message: error.message,
        })
    }

};

export const Put = async (req, res) => {
    const codigo = req.params.codigo;
    const {  nif , nombre, apellido_1, apellido_2 , codigo_departamento} = req.body
    try {
        const empleado = await Empleado.findByPk(codigo);
        empleado.nif = nif;
        empleado.nombre = nombre;
        empleado.apellido_1 = apellido_1;
        empleado.apellido_2 = apellido_2
        empleado.codigo_departamento = codigo_departamento;

        await empleado.save();
        res.json({
            Success: true,
            Status: "200",
            Message: 'Update successful',
            Data: empleado
        });
    } catch (error) {
        return res.status(500).json({
            Success: false,
            Status: "500",
            Message: error.message,
        })
    }
};

export const Delete = async (req, res) => {
    const codigo = req.params.codigo;
    try {
        await Empleado.destroy({
            where: {
                codigo
            }
        });
        res.json({
            Success: true,
            Status: "200",
            Message: 'Delete successful',
            Data: {
                codigo
            }
        });
    } catch (error) {
        return res.status(500).json({
            Success: false,
            Status: "500",
            Message: error.message,
        })
    }

};
