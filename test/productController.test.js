const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/index')
require('dotenv').config();

describe('Pruebas sobre la API de productos', () => {
    beforeAll(async () => {
        // Establece la conexión a la base de datos MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        // Cierra la conexión a la base de datos después de todas las pruebas
        await mongoose.disconnect();
    });

    describe('GET /products', () => {
        let response;

        beforeEach(async () => {
            // Realiza una solicitud GET a la ruta /products antes de cada prueba
            response = await request(app).get('/products').send();
        });

        it('La ruta funciona correctamente', async () => {
            // Verifica que la ruta responda con un código de estado 200
            expect(response.status).toBe(200);
            // Verifica que el tipo de contenido de la respuesta sea JSON/html
            expect(response.headers['content-type']).toMatch(/html/);
        });

        it('La petición muestra el html correcto', async () => {
            // Verifica que la respuesta contenga 
            expect(response.text).toContain('All products');
        });
    });
});
