const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/index');
const Product = require('../src/models/Product');
require('dotenv').config();

describe('Pruebas sobre la API de productos', () => {
    beforeAll(async () => {
        
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        
        await mongoose.disconnect();
    });

    describe('GET /products', () => {
        let response;

        beforeEach(async () => {
            
            response = await request(app).get('/products').send();
            products = await Product.find();
        });

        it('La ruta funciona correctamente', async () => {
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/html/);
        });

        it('La petición muestra el html correcto', async () => {
            
            const itemCardElements = response.text.match(/<div class="item-card"/g);
            expect(itemCardElements.length).toBe(products.length);
        });
    });

    describe('GET /products/:id', () => {
        it('La ruta funciona correctamente', async () => {

            const mockProduct = {
                _id: 'mockId',
                name: 'Mock Product',
                description: 'Mock Description',
                image: 'mockImageUrl',
                category: 'Camisetas',
                size: 'M',
                price: 10,
            };
            jest.spyOn(Product, 'findById');
            Product.findById.mockResolvedValue(mockProduct);
            const response = await request(app).get('/products/mockId').send();

            
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
        expect(Product.findById).toHaveBeenCalledWith('mockId');
        expect(response.text).toContain(mockProduct.name);

        const priceRegex = /<b class="item-field-title">Precio:<\/b>(\d+)€/;
        const match = response.text.match(priceRegex);
        const priceInHtml = match ? parseInt(match[1]) : null;

        expect(priceInHtml).toBe(mockProduct.price);
        });
    });
});
