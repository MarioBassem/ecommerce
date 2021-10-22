const Product = require('../models/product');
const { products } = require('../routes/admin');

exports.getAddProduct = (req, res, next) => {
    res.render('add-prodcut', {
        pageTitle: 'Add Product',
        path: '/admin/add-prodcut',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
};


exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProdcuts = (req, res, next) => {
    Product.fetchAll(prodcuts => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        });
    });
};