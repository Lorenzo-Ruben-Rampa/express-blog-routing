const express = require('express')
const app = express()
const port = 3000

// Importo il file del routing
const postsRouter = require('./routers/posts');

// Definisco una cartella per i file statici
app.use(express.static('public'));

// Definisco la rotta home
app.get('/', (req, res) => {
	res.send( 'Server del mio blog')
})

// Definisco la rotta bacheca
app.get('/bacheca', (req, res) => {
    const posts = [
        {
            title: "Viaggio in Giappone",
            content: "Un'esperienza incredibile tra templi, tecnologia e cibo delizioso!",
            image: "http://localhost:3000/images/japan.jpg",
            tags: ["viaggi", "Asia", "cultura", "cibo"]
        },
        {
            title: "Guida alla Programmazione JavaScript",
            content: "Introduzione a JavaScript con esempi pratici e consigli utili.",
            image: "http://localhost:3000/images/javascript.jpg",
            tags: ["programmazione", "JavaScript", "sviluppo web"]
        },
        {
            title: "Ricetta della Carbonara Perfetta",
            content: "Scopri gli ingredienti autentici e il procedimento per una carbonara squisita.",
            image: "http://localhost:3000/images/carbonara.jpg",
            tags: ["cucina", "ricette", "pasta", "Italia"]
        },
        {
            title: "Allenamento a Corpo Libero",
            content: "Una routine completa per allenarsi senza attrezzatura e restare in forma.",
            image: "http://localhost:3000/images/allenamento.jpg",
            tags: ["fitness", "salute", "workout"]
        },
        {
            title: "Migliori Film di Fantascienza",
            content: "Un viaggio tra i capolavori del cinema sci-fi da non perdere.",
            image: "http://localhost:3000/images/alien.jpg",
            tags: ["cinema", "fantascienza", "film"]
        }
    ]
    res.json(posts);
})
    
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
