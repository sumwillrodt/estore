const router = require('express').Router();
const apiRoutes = require('./api')
// const categoryRoutes = require('../routes/api/category-routes');
// const productRoutes = require('../routes/api/product-routes');
// const tagRoutes = require('../routes/api/tag-routes');

router.use('/api', apiRoutes);
// router.use('/category-routes', categoryRoutes);
// router.use('/product-routes', productRoutes);
// router.use('/tag-routes', tagRoutes);

router.use((req, res) => {
  res.send('"<h1>Wrong Route!</h1>"')
});

module.exports = router;