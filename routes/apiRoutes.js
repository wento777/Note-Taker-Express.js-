
const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    //need to respond with the content of db.json
    readFromFile(path.join(__dirname, '../db/db.json')).then(ourData => {
        res.json(JSON.parse(ourData));
    })
});

router.post('/notes', (req, res) => {
   
 readAndAppend(path.join(__dirname, '../db/db.json')).then(ourData => {
        res.json(JSON.parse(ourData));
 })

    });

// router.delete('/notes/:id', (req, res) => {

   
// })


module.exports = router;