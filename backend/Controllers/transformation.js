const { getTransformation: getTransformationModel, addTransformation, 
    getTransformationById: getTransformationByIdModel, deleteTransformation: deleteTransformationModel, 
    updateTransformation: updateTransformationModel } = require('../Models/transformation')

function getTransformation(req, res, next) {
    getTransformationModel().then(transformations => res.json(transformations));
}

function getTransformationById(req, res, next) {
    getTransformationByIdModel(req.params.transformationId).then(transformations =>
        res.status(transformations ? 200 : 404).json(transformations ?? {
            message: "No transformation found"
        }));
}

function deleteTransformation(req, res, next) {
    deleteTransformationModel(req.params.transformationId).then(deletedTransformation =>
        res.status(deletedTransformation ? 202 : 404).json(deletedTransformation ?? { message: 'Transformation not found' })
    )
}

async function createNewTransformation(req, res, next) {
    const body = req.body;

    if (!body.vaccineNameAr)
        return res.status(400).json({ message: "Your vaccine name is required" })
    if (body.vaccineNameAr.length < 3)
        return res.status(400).json({ message: "Your vacccine name is too short" })
    if (!body.vaccineNameEng)
        return res.status(400).json({ message: "Your vaccine name is required" })
    if (body.vaccineNameEng.length < 3)
        return res.status(400).json({ message: "Your vacccine name is too short" })
    if (!body.vaccineProduct)
        return res.status(400).json({ message: "Your vaccine product is required" })
    if (body.vaccineProduct.length < 3)
        return res.status(400).json({ message: "Your vacccine product is too short" })

    await addTransformation(body).then(transformation => {
        res.json(transformation);
    })
}

function updateTransformation(req, res, next) {
    const body = req.body;

    if ((body.vaccineNameAr) && (body.vaccineNameAr.length < 3))
        return res.status(400).json({ message: "Your vaccine name is too short" })
    if ((body.vaccineNameEng) && (body.vaccineNameEng.length < 3))
        return res.status(400).json({ message: "Your vaccine name is too short" })
    if ((body.vaccineProduct) && (body.vaccineProduct.length < 3))
        return res.status(400).json({ message: "Your vaccine product is too short" })

    updateTransformationModel(req.params.transformationId, body).then(updatedTransformation =>
        res.json(updatedTransformation)
    )
}

module.exports = {
    getTransformation,
    getTransformationById,
    createNewTransformation,
    deleteTransformation,
    updateTransformation,
}