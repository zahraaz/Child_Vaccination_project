const express = require('express');

const router = express.Router();

const { getMedicalCenters, getMedicalCenterById, createNewMedicalCenter, deleteMedicalCenter, 
    updateMedicalCenter } = require('../Controllers/medicalCenter');

router.get('/:medicalCenterId', getMedicalCenterById)
router.delete('/:medicalCenterId', deleteMedicalCenter)

router.get('/', getMedicalCenters);

router.use(express.json());

router.post('/', createNewMedicalCenter)
router.put('/:medicalCenterId', updateMedicalCenter);

module.exports = router;