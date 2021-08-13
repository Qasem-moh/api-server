'use strict';

const express = require('express');
const router = express.Router();
const clothesModel = require('../models/clothes.js');
const collection = require('../models/lip/collection');

// create instance
const clothesInstance = new collection(clothesModel);

// RESTFUL APIs declaration
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function getClothes(req, res) {
    let allClothes = await clothesInstance.get();
    res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
    let _id = req.params.id;
    let oneClothes = await clothesInstance.get(_id);
    res.status(200).json(oneClothes);
}

async function createClothes(req, res) {
    let obj = req.body;
    let newClothes = await clothesInstance.create(obj);
    res.status(201).json(newClothes);
}

async function updateClothes(req, res) {
    let _id = req.params.id;
    let obj = req.body;
    let updatedClothes = await clothesInstance.update(_id, obj);
    res.status(201).json(updatedClothes);
}

async function deleteClothes(req, res) {
    let id = req.params.id;
    let deleted = await clothesInstance.delete(id);
    res.status(202).json(deleted);
}

module.exports = router;