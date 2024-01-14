const express = require('express');

const router = express.Router();

const { getVaccination, getVaccinationById, createNewVaccination, deleteVaccination,
 updateVaccination } = require('../Controllers/vaccination');

router.get('/:vaccinationId', getVaccinationById)
router.delete('/:vaccinationId', deleteVaccination)

router.get('/', getVaccination);

router.use(express.json());

router.post('/', createNewVaccination)
router.put('/:vaccinationId', updateVaccination);

module.exports = router;