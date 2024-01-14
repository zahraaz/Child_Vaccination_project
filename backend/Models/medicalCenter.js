const { getRepository } = require('typeorm');
const { getChildById } = require('./child');

class  MedicalCenter{
    constructor(id, name) {
        this.id = id;
        this.name = name;
        
    }

    static copyFromData = (id,name) =>
        new Child(id, name );

    toString = () =>
        `${this.id}: ${this.name}`;
}

function addMedicalCenter(value) {
    if (!getChildById(value.childId))
        return ({ message: "child not found", })
    const medicalCenter = medicalCenter.copyFromData(
        (medicalCenter[medicalCenter.length - 1]?.id ?? 0) + 1,
        value.name);
    medicalCenter.push(medicalCenter);
    return medicalCenter;
}
////////////////////////////////////////////////////////////////////////////////////////

const getMedicalCenter  = (medicalCenterRepository = getRepository(MedicalCenter)) => 
medicalCenterRepository.find();

////////////////////////////////////////////////////////////////////////////////////////

const getMedicalCenterById = (id) => getMedicalCenters().find(medicalCenter => medicalCenter.id == id);

const getMedicalCenterIndexById = (id) => getMedicalCenters().findIndex(medicalCenter => medicalCenter.id == id);

////////////////////////////////////////////////////////////////////////////////////////

const deleteMedicalCenter =
    async (id, medicalCenterRepository = getRepository(MedicalCenter)) => {
        return await medicalCenterRepository.delete(id);
    }

const updateMedicalCenter = (id, updatedMedicalCenter) => {
    const medicalCenter = getMedicalCenters();
    const index = getMedicalCenterIndexById(id);
    if (updatedMedicalCenter.city) medicalCenter[index].city = updatedMedicalCenter.city;
    if (updatedMedicalCenter.locality) medicalCenter[index].locality = updatedMedicalCenter.locality;
    if (updatedMedicalCenter.ally) medicalCenter[index].ally = updatedMedicalCenter.ally;
    if (updatedMedicalCenter.residence) medicalCenter[index].residence = updatedMedicalCenter.residence;
    return medicalCenters[index];
}


module.exports = {
    getMedicalCenter,
    getMedicalCenterById,
    addMedicalCenter,
    deleteMedicalCenter,
    updateMedicalCenter,
}