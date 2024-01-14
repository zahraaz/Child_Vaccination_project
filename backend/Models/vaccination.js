const { getRepository } = require('typeorm');
const { getChildById } = require('./child');

class Vaccination{
    constructor(id, vaccineType, vaccineName, vaccineNameAr, vaccineDate, nextDate, nurseName,childAge) {
        this.id = id;
        this.vaccineType = vaccineType;
        this.vaccineName = vaccineName;
        this.vaccineNameAr = vaccineNameAr;
        this.vaccineDate = vaccineDate;
        this.nextDate = nextDate;
        this.nurseName = nurseName;
        this.childAge = childAge;
    }

    static copyFromData = (id, vaccineType, vaccineName, vaccineNameAr, vaccineDate, nextDate, nurseName,childAge)=>
        new Child(id, vaccineType, vaccineName, vaccineNameAr, vaccineDate, nextDate, nurseName,childAge);

    toString = () =>
        `${this.id}: ${this.vaccineType}`;
}

function addVaccination(value) {
    if (!getChildById(value.childId))
        return ({ message: "child not found", })
    const vaccination = vaccination.copyFromData(
        (vaccination[vaccination.length - 1]?.id ?? 0) + 1,
        value.vaccineType,
        value.vaccineName,
        value. vaccineNameAr,
        value.vaccineDate,
        value.nextDate,
        value.nurseName,
        value.childAge );
    vaccination.push(vaccination);
    return vaccination;
}
////////////////////////////////////////////////////////////////////////////////////////

const getVaccination  = (vaccinationRepository = getRepository(Vaccination)) => 
vaccinationRepository.find();

////////////////////////////////////////////////////////////////////////////////////////

const getVaccinationById = (id) => getVaccination().find(vaccination => vaccination.id == id);

const getVaccinationIndexById = (id) => getVaccination().findIndex(vaccination => vaccination.id == id);

////////////////////////////////////////////////////////////////////////////////////////

const deleteVaccination =
    async (id, vaccinationRepository = getRepository(Vaccination)) => {
        return await vaccinationRepository.delete(id);
    }

const updateVaccination = (id, updatedVaccination) => {
    const vaccination = getVaccination();
    const index = getVaccinationIndexById(id);
    if (updatedVaccination.vaccineType) vaccination[index].vaccineType = updatedVaccination.vaccineType;
    if (updatedVaccination.vaccineName) vaccination[index].vaccineName = updatedVaccination.vaccineName;
    if (updatedVaccination.vaccineNameAr) vaccination[index].vaccineNameAr = updatedVaccination.vaccineNameAr;
    if (updatedVaccination.vaccineDate) vaccination[index].vaccineDate = updatedVaccination.vaccineDate;
    if (updatedVaccination.nextDate) vaccination[index].nextDate = updatedVaccination.nextDate;
    if (updatedVaccination.nurseName) vaccination[index].nurseName = updatedVaccination.nurseName;
    if (updatedVaccination.childAge) vaccination[index].childAge = updatedVaccination.childAge;
    return vaccination[index];
}


module.exports = {
    getVaccination,
    getVaccinationById,
    addVaccination,
    deleteVaccination,
    updateVaccination,
}