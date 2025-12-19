import * as modelo from './modelo.proveedor.mjs';

async function obtenerProveedores(req, res) {
    try {
        const resultado = await modelo.obtenerProveedores();
        res.json(resultado); // resultado ya es un array de objetos
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener proveedores' });
    }
}

async function obtenerProveedor(req, res) {
    try {
        const { id } = req.params;
        const resultado = await modelo.obtenerproveedor(id);
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener proveedor' });
    }
}

async function altaproveedor(req, res) {
    try {
        const { nombre, telefono, email } = req.body;
        if (!nombre || !telefono || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos' });
        }
        const nuevoProveedor = await modelo.altaproveedor(nombre, telefono, email);
        res.status(201).json(nuevoProveedor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al dar de alta proveedor' });
    }
}

async function bajaproveedor(req, res) {
    try {
        const { id } = req.params;
        const proveedorEliminado = await modelo.bajaproveedor(id);
        if (proveedorEliminado) {
            res.status(200).json(proveedorEliminado);
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar proveedor' });
    }
}

async function actualizarproveedor(req, res) {
    try {
        const { id } = req.params;
        const { nombre, telefono, email } = req.body;
        if (!nombre || !telefono || !email) {
            return res.status(400).json({ mensaje: 'Datos incompletos' });
        }
        const proveedorActualizado = await modelo.actualizarproveedor(id, nombre, telefono, email);
        if (proveedorActualizado) {
            res.status(200).json(proveedorActualizado);
        } else {
            res.status(404).json({ mensaje: 'Proveedor no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar proveedor' });
    }
}

export {
    obtenerProveedores,
    obtenerProveedor,
    altaproveedor,
    bajaproveedor,
    actualizarproveedor
};
