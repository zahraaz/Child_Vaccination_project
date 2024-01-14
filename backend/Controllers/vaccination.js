const { getVaccination: getVaccinationModel, addVaccination, 
    getVaccinationById: getVaccinationByIdModel, deleteVaccination: deleteVaccinationModel, 
    updateVaccination: updateVaccinationModel } = require('../Models/vaccination')

function getVaccination(req, res, next) {
    res.json(getVaccinationModel());
}

function getVaccinationById(req, res, next) {
    res.json(getVaccinationByIdModel(req.params.vaccinationId) ?? {
        message: "No vaccination found"
    });
}

function deleteVaccination(req, res, next) {
    if (getVaccinationByIdModel(req.params.vaccinationId))
        return res.json(deleteVaccinationModel(req.params.vaccinationId));
    return res.json({ message: 'Vaccination not found' });
}

function createNewVaccination(req, res, next) {
    const body = req.body;

    if (!body.title)
        return res.status(400).json({ message: "Your title is required" })
    if (body.title.length < 3)
        return res.status(400).json({ message: "Your title is too short" })
    if (!body.price)
        return res.status(400).json({ message: "Your price is required" })
    if (body.price < 0.99)
        return res.status(400).json({ message: "You price is too low" })
    if ((!body.authorId) || (isNaN(parseInt(body.authorId))))
        return res.status(400).json({ message: "Not valid author id" })

    res.json(addVaccination(body));
}

function updateVaccination(req, res, next) {
    const body = req.body;

    if (body.title.length < 3)
        return res.status(400).json({ message: "Your title is too short" })
    if (body.price < 0.99)
        return res.status(400).json({ message: "You price is too low" })


    res.json(updateVaccinationModel(req.params.VaccinationId, body));
}

module.exports = {
    getVaccination,
    getVaccinationById,
    createNewVaccination,
    deleteVaccination,
    updateVaccination,
}