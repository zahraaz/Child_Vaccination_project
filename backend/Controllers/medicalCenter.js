const { getMedicalCenters: getMedicalCentersModel, addMedicalCenter, getMedicalCenterById: getMedicalCenterByIdModel, 
    deleteMedicalCenter: deleteMedicalCenterModel, updateMedicalCenter: updateMedicalCenterModel } = require('../models/medicalCenter')

function getMedicalCenters(req, res, next) {
    getMedicalCentersModel().then(medicalCenters => res.json(medicalCenters));
}

function getMedicalCenterById(req, res, next) {
    getMedicalCenterByIdModel(req.params.medicalCenterId).then(medicalCenters =>
        res.status(medicalCenters ? 200 : 404).json(medicalCenters ?? {
            message: "No medicalCenter found"
        }));
}

function deleteMedicalCenter(req, res, next) {
    deleteMedicalCenterModel(req.params.medicalCenterId).then(deletedMedicalCenter =>
        res.status(deletedMedicalCenter ? 202 : 404).json(deletedMedicalCenter ?? { message: 'MedicalCenter not found' })
    )
}

async function createNewMedicalCenter(req, res, next) {
    const body = req.body;

    if (!body.name)
        return res.status(400).json({ message: "Your name is required" })
    if (body.name.length < 3)
        return res.status(400).json({ message: "Your name is too short" })

    await addMedicalCenter(body).then(medicalCenter => {
        res.json(medicalCenter);
    })
}

function updateMedicalCenter(req, res, next) {
    const body = req.body;

    if ((body.name) && (body.name.length < 3))
        return res.status(400).json({ message: "Your name is too short" })

    updateMedicalCenterModel(req.params.medicalCenterId, body).then(updatedMedicalCenter =>
        res.json(updatedMedicalCenter)
    )
}

module.exports = {
    getMedicalCenters,
    getMedicalCenterById,
    createNewMedicalCenter,
    deleteMedicalCenter,
    updateMedicalCenter,
}