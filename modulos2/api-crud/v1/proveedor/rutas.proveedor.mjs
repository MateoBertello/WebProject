import express from 'express';
import * as controlador from './controlador.proveedor.mjs';

const rutasProveedores = express.Router();
rutasProveedores.use(express.json());

rutasProveedores.get('/api/v1/proveedores', controlador.obtenerProveedores);
rutasProveedores.get('/api/v1/proveedores/:id', controlador.obtenerProveedor);
rutasProveedores.post('/api/v1/proveedores', controlador.altaproveedor);
rutasProveedores.put('/api/v1/proveedores/:id', controlador.actualizarproveedor);
rutasProveedores.delete('/api/v1/proveedores/:id', controlador.bajaproveedor);

export default rutasProveedores;
