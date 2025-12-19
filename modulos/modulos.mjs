import express from 'express';

import rutasProductosV1 from './api-crud/v1/productos/rutas.productos.mjs';

const ModuloApi = express.Router();

// Asociar los routers con su ruta base
ModuloApi.use(rutasProductosV1);

export default ModuloApi;
