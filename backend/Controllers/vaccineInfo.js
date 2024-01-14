const { getVaccineInfo: getVaccineInfoModel, 
    addVaccineInfo, getVaccineInfoById: getVaccineInfoByIdModel, 
    deleteVaccineInfo: deleteVaccineInfoModel, updateVaccineInfo: 
    updateVaccineInfoModel } = require('../Models/vaccineInfo')

function getVaccineInfo(req, res, next) {
    res.json(getVaccineInfoModel());
}

function getVaccineInfoById(req, res, next) {
    res.json(getVaccineInfoByIdModel(req.params.vaccineInfoId) ?? {
        message: "No vaccineInfo found"
    });
}

function deleteVaccineInfo(req, res, next) {
    if (getVaccineInfoByIdModel(req.params.vaccineInfoId))
        return res.json(deleteVaccineInfoModel(req.params.vaccineInfoId));
    return res.json({ message: 'VaccineInfo not found' });
}

function createNewVaccineInfo(req, res, next) {
    const body = req.body;

    if (!body.name)
        return res.status(400).json({ message: "Your vaccine name is required" })
    if (body.name.length < 3)
        return res.status(400).json({ message: "Your vaccine is too short" })

    if ((!body.authorId) || (isNaN(parseInt(body.authorId))))
        return res.status(400).json({ message: "Not valid author id" })

    res.json(addVaccineInfo(body));
}

function updateVaccineInfo(req, res, next) {
    const body = req.body;

    if (body.name.length < 3)
        return res.status(400).json({ message: "Your vaccine name is too short" })

    res.json(updateVaccineInfoModel(req.params.VaccineInfoId, body));
}

module.exports = {
    getVaccineInfo,
    getVaccineInfoById,
    createNewVaccineInfo,
    deleteVaccineInfo,
    updateVaccineInfo,
}