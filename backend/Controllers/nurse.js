const { getNurse: getNurseModel, addNurse, getNurseById: getNurseByIdModel, 
    deleteNurse: deleteNurseModel, updateNurse: updateNurseModel } = require('../Models/nurse')

function getNurses(req, res, next) {
    getNurseModel().then(nurses => res.json(nurses));
}

function getNurseById(req, res, next) {
    getNurseByIdModel(req.params.nurseId).then(nurses =>
        res.status(nurses ? 200 : 404).json(nurses ?? {
            message: "No nurse found"
        }));
}

function deleteNurse(req, res, next) {
    deleteNurseModel(req.params.nurseId).then(deletedNurse =>
        res.status(deletedNurse ? 202 : 404).json(deletedNurse ?? { message: 'Nurse not found' })
    )
}

async function createNewNurse(req, res, next) {
    const body = req.body;

    if (!body.name)
        return res.status(400).json({ message: "Your name is required" })
    if (body.name.length < 3)
        return res.status(400).json({ message: "Your name is too short" })

    await addNurse(body).then(nurse => {
        res.json(nurse);
    })
}

function updateNurse(req, res, next) {
    const body = req.body;

    if ((body.name) && (body.name.length < 3))
        return res.status(400).json({ message: "Your name is too short" })

    updateNurseModel(req.params.nurseId, body).then(updatedNurse =>
        res.json(updatedNurse)
    )
}

module.exports = {
    getNurses,
    getNurseById,
    createNewNurse,
    deleteNurse,
    updateNurse,
}