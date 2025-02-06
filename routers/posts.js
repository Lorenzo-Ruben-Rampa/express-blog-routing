// Importo express e uso parte routing
const express = require ('express')
const router = express.Router();

// Rotte CRUD
router.get('/posts', function (req, res) {
	res.send(`Lista dei post`);
});
router.get('/posts/:id', function (req, res) {
	res.send(`Dettagli dei post` + req.params.id);
});
router.post('/posts', function (req, res) {
	res.send(`Creazione nuovo post`);
});

router.post('/posts/:id', function (res, req) {
  res.send(`Cancellazione del post` + req.params.id);
});

// Esporto la parte di routing
module.exports = router;

