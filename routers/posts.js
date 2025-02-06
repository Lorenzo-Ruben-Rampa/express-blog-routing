// Importo express e uso parte routing
const express = require ('express')
const router = express.Router();

// Rotte CRUD
// index
router.get('/', function (req, res) {
	res.send(`Lista dei post`);
  res.json(posts);
});
// show
router.get('/:id', function (req, res) {
	res.send(`Dettagli dei post` + req.params.id);
});
//store
router.post('/', function (req, res) {
	res.send(`Creazione nuovo post`);
});
//update
router.put('/:id', function(req, res) {
	res.send(`Modifica integrale del post` + req.params.id);
});
//modify
router.patch('/:id', function(req, res) {
	res.send(`Modifica parziale del post` + req.params.id);
});
//destroy
router.delete('/:id', function (res, req) {
  res.send(`Cancellazione del post` + req.params.id);
});

// Esporto la parte di routing
module.exports = router;

