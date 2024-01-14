const express = require('express');

const router = express.Router();

const { getTransformation, getTransformationById, createNewTransformation, deleteTransformation,
     updateTransformation } = require('../Controllers/transformation');

router.get('/:transformationId', getTransformationById)
router.delete('/:transformationId', deleteTransformation)

router.get('/', getTransformation);

router.use(express.json());

router.post('/', createNewTransformation)
router.put('/:transformationId', updateTransformation);

module.exports = router;