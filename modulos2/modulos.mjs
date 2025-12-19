import express from 'express';

import rutasProveedores from './api-crud/v1/proveedor/rutas.proveedor.mjs';

const ModuloApiP = express.Router();

// Asociar los routers con su ruta base
ModuloApiP.use(rutasProveedores);

export default ModuloApiP;
