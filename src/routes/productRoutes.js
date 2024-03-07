const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const {isAuthenticated} = require('../middlewares/authMiddleware');
const upload = require('../config/upload');

router.get('/products', productController.showProducts);
router.get('/products/:productId', productController.showProductById);
router.get('/category/:category', productController.showProductsByCategory);
router.get('/dashboard/:productId', isAuthenticated, productController.showProductById);
router.get('/dashboard', isAuthenticated, productController.showDashboard);
router.post('/dashboard/new', isAuthenticated, upload.single('image'), productController.createProduct);
router.get('/dashboard/:productId/edit', productController.showEditProduct);
router.post('/dashboard/:productId/edit', isAuthenticated, upload.single('image'), productController.editProduct);
router.post('/dashboard/:productId/delete',isAuthenticated, productController.deleteProduct);

router.get('/api/products', productController.showProductsAPI);
router.get('/api/products/:productId', productController.showProductByIdAPI);
router.get('/api/category/:category', productController.showProductsByCategoryAPI);
router.get('/api/dashboard/:productId', isAuthenticated, productController.showProductByIdAPI);
router.get('/api/dashboard', isAuthenticated, productController.showDashboardAPI);
router.post('/api/dashboard/new', isAuthenticated, upload.single('image'), productController.createProductAPI);
router.get('/api/dashboard/:productId/edit', isAuthenticated, productController.showEditProductAPI);
router.post('/api/dashboard/:productId/edit', isAuthenticated, upload.single('image'), productController.editProductAPI);
router.post('/api/dashboard/:productId/delete', productController.deleteProductAPI);

module.exports = router;

