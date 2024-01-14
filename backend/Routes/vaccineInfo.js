const express = require('express');

const router = express.Router();

const { getVaccineInfo, getVaccineInfoById, createNewVaccineInfo, deleteVaccineInfo,
     updateVaccineInfo } = require('../Controllers/vaccineInfo');

router.get('/:vaccineInfoId', getVaccineInfoById)
router.delete('/:vaccineInfoId', deleteVaccineInfo)

router.get('/', getVaccineInfo);

router.use(express.json());

router.post('/', createNewVaccineInfo)
router.put('/:vaccineInfoId', updateVaccineInfo);

module.exports = router;