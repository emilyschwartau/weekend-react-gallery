const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('hello', req.params);
    const galleryId = req.params.id;
    console.log(req.params.id)
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

// // PUT Route I did 
// router.put('/photoView/:id', (req, res) => {
//     console.log(req.params);
//     // const galleryId = req.params.id;
//     // for(const galleryItem of galleryItems) {
//     //     if(galleryItem.id == galleryId) {
//     //         galleryItem.likes += 1;
//     //     }
//     // }
//     res.sendStatus(200);
//}); // END PUT Route


module.exports = router;