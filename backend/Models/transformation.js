const { getRepository } = require('typeorm');
const { getChildById } = require('./child');
const transformation = require('../Entity/transformation');

class Transformation{
    constructor(id, vaccineNameAr, doseAmount, dosePerVial, vaccineNameEng, vaccineProduct) {
        this.id = id;
        this.vaccineNameAr = vaccineNameAr;
        this.doseAmount = doseAmount;
        this.dosePerVial = dosePerVial;
        this.vaccineNameEng = vaccineNameEng;
        this.vaccineProduct = vaccineProduct;
    }

    static copyFromData = (id, vaccineNameAr, doseAmount, dosePerVial, vaccineNameEng, vaccineProduct)=>
        new Child(id, vaccineNameAr, doseAmount, dosePerVial, vaccineNameEng, vaccineProduct);

    toString = () =>
        `${this.id}: ${this.vaccineNameAr}`;
}

function addTransformation(value) {
    if (!getChildById(value.childId))
        return ({ message: "child not found", })
    const transformation = transformation.copyFromData(
        (transformation[transformation.length - 1]?.id ?? 0) + 1,
        value.vaccineNameAr,
        value.doseAmount,
        value. dosePerVial,
        value.vaccineNameEng,
        value.vaccineProduct);
    transformation.push(transformation);
    return transformation;
}
////////////////////////////////////////////////////////////////////////////////////////

const getTransformation  = (transformationRepository = getRepository(Transformation)) => 
transformationRepository.find();

////////////////////////////////////////////////////////////////////////////////////////

const getTransformationById = (id) => getTransformation().find(transformation => transformation.id == id);

const getTransformationIndexById = (id) => getTransformation().findIndex(transformation => transformation.id == id);

////////////////////////////////////////////////////////////////////////////////////////

const deleteTransformation =
    async (id, transformationRepository = getRepository(Transformation)) => {
        return await transformationRepository.delete(id);
    }

const updateTransformation = (id, updatedTransformation) => {
    const transformation = getTransformation();
    const index = getTransformationIndexById(id);
    if (updatedTransformation.vaccineNameAr) transformation[index].vaccineNameAr = updatedTransformation.vaccineNameAr;
    if (updatedTransformation.doseAmount) transformation[index].doseAmount = updatedTransformation.doseAmount;
    if (updatedTransformation.dosePerVial) transformation[index].dosePerVial = updatedTransformation.dosePerVial;
    if (updatedTransformation.vaccineNameEng) transformation[index].vaccineNameEng = updatedTransformation.vaccineNameEng;
    if (updatedTransformation.vaccineProduct) transformation[index].vaccineProduct = updatedTransformation.vaccineProduct;
    return transformation[index];
}


module.exports = {
    getTransformation,
    getTransformationById,
    addTransformation,
    deleteTransformation,
    updateTransformation,
}