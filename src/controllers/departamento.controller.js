import { Departamento } from '../models/departamento.model.js'

export const GetAll = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll();
        res.json({
            Success: true,
            Status: "200",
            Message: 'Request successful',
            Data: departamentos
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
        const departamento = await Departamento.findByPk(codigo);
        res.json({
            Success: true,
            Status: "200",
            Message: 'Request successful',
            Data: departamento
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
    const { codigo, nombre, presupuesto } = req.body;
    try {
        const newDepartamento = await Departamento.create({
            codigo,
            nombre,
            presupuesto
        });
        res.json({
            Success: true,
            Status: "201",
            Message: 'Registration successful',
            Data: newDepartamento
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
    const { nombre, presupuesto} = req.body
    try {
        const departamento = await Departamento.findByPk(codigo);
        departamento.nombre = nombre;
        departamento.presupuesto = presupuesto;

        await departamento.save();
        res.json({
            Success: true,
            Status: "200",
            Message: 'Update successful',
            Data: departamento
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
        await Departamento.destroy({
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
