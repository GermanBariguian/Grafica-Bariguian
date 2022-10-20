var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('admin/novedades',{
    layout: 'admin/layout',
    persona: req.session.nombre
  });
});

/* para una novedad NUEVA */
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {  // agregar.hbs
    layout: 'admin/layout',
  });
});

module.exports = router;