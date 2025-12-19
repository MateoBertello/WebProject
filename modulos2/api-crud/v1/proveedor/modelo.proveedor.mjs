
import pool from '../../../../conexion/conexion.bd.mjs';

async function obtenerProveedores() {
    const resultado = await pool.query('SELECT * FROM proveedores ORDER BY nombre ASC');
    return resultado.rows;
}

async function obtenerproveedor(id) {
    const resultado = await pool.query('SELECT * FROM proveedores WHERE id = $1', [id]);
    return resultado.rows[0] || null;
}

async function altaproveedor(nombre, telefono, email) {
    const resultado = await pool.query(
        'INSERT INTO proveedores (nombre, telefono, email) VALUES ($1, $2, $3) RETURNING *',
        [nombre, telefono, email]
    );
    return resultado.rows[0] || null;
}

async function actualizarproveedor(id, nombre, telefono, email) {
    const resultado = await pool.query(
        'UPDATE proveedores SET nombre = $1, telefono = $2, email = $3 WHERE id = $4 RETURNING *',
        [nombre, telefono, email, id]
    );
    return resultado.rows[0] || null;
}

async function bajaproveedor(id) {
    const resultado = await pool.query('DELETE FROM proveedores WHERE id = $1 RETURNING *', [id]);
    return resultado.rows[0] || null;
}

export {
    obtenerProveedores,
    obtenerproveedor,
    altaproveedor,
    actualizarproveedor,
    bajaproveedor
};
