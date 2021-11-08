// import models
const Product = require('../models/Product');
const Category = require('../models/Category');
const Tag = require('../models/Tag');
const ProductTag = require('../models/ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: ProductTag, 
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: ProductTag,
  foreignKey: 'tag_id',
 });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
