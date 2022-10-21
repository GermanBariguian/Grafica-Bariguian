var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

/* para eliminar una novedad */
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
});

/* para una novedad NUEVA */
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {  // agregar.hbs
    layout: 'admin/layout',
  });
});

module.exports = router;