const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/index');
const Product = require('../src/models/Product');
const cheerio = require('cheerio');
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
        });
    });
    describe('GET /category/:category', () => {
        it('La ruta funciona correctamente', async () => {
    
            const mockCategory = 'Camisetas';
    
            jest.spyOn(Product, 'find');
    
            const mockProducts = [
                {
                    _id: 'mockId1',
                    name: 'Camiseta Roja',
                    category: 'Camisetas',
                    price: '15',
                    description: 'item description',
                    size: 'M'

                },
                {
                    _id: 'mockId2',
                    name: 'Camiseta Azul',
                    category: 'Camisetas',
                    price: '20',
                    description: 'item description',
                    size: 'M'
                },
            ];
    
            
            Product.find.mockResolvedValue(mockProducts);
            const response = await request(app).get('/category/Camisetas').send();
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/html/);
            expect(Product.find).toHaveBeenCalledWith({ category: mockCategory });
            const $ = cheerio.load(response.text);
            const productElements = $('.item-card');
            expect(productElements.length).toBe(mockProducts.length);
        });
    });

    jest.mock('multer', () => {
        return {
            single: jest.fn(() => (req, res, next) => {
                // Simular que el archivo se ha cargado correctamente
                req.file = {
                    fieldname: 'image',
                    originalname: 'test-image.jpg',
                    encoding: '7bit',
                    mimetype: 'image/jpeg',
                    buffer: Buffer.from([8, 6, 7, 5, 3, 0, 9]),
                    size: 7
                };
                next();
            })
        };
    });
    
    jest.mock('../src/middlewares/authMiddleware', () => ({
        isAuthenticated: jest.fn().mockImplementation((req, res, next) => {
          if (req.session && req.session.uid) {
            next(); // Simula que el usuario está autenticado
          } else {
            res.redirect('/products'); // Redirige al usuario a /products
          }
        }),
      }));
      
      describe('POST /dashboard/new', () => {
        it('deberia crear un nuevo producto si el usuario está autenticado y proporciona los datos correctos', async () => {
          // Simulamos un usuario autenticado
            { session: { uid: 'usuarioAutenticado' } };
      
          const response = await request(app)
          .post('/dashboard/new')
          .attach('image', Buffer.from([8, 6, 7, 5, 3, 0, 9]), 'test-image.jpg')
          .field('name', 'Nuevo producto')
          .field('description', 'Descripción del nuevo producto')
          .field('category', 'Camisetas')
          .field('size', 'M')
          .field('price', '20'); 
      
          expect(response.status).toBe(200);
          expect(response.text).toContain('Producto creado correctamente');
        });
      
    });
})
