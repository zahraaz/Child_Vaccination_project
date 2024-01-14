const { getRepository } = require('typeorm');
const { getChildById } = require('./child');

class VaccinationInfo{
    constructor(id, name,packageNumber, expire, producedCompany ) {
        this.id = id;
        this.name = name;
        this.packageNumber = packageNumber;
        this.expire = expire;
        this.producedCompany = producedCompany;
    }

    static copyFromData = (id, name,packageNumber, expire, producedCompany )=>
        new Child(id, name, packageNumber, expire, producedCompany );

    toString = () =>
        `${this.id}: ${this.name}`;
}

function addVaccinationInfo(value) {
    if (!getChildById(value.childId))
        return ({ message: "child not found", })
    const vaccineInfo = vaccineInfo.copyFromData(
        (vaccineInfo[vaccineInfo.length - 1]?.id ?? 0) + 1,
        value.name,
        value.packageNumber,
        value. expire,
        value.producedCompany);
    vaccineInfo.push(vaccineInfo);
    return vaccineInfo;
}
////////////////////////////////////////////////////////////////////////////////////////

const getVaccinationInfo  = (vaccineInfoRepository = getRepository(VaccinationInfo)) => 
vaccineInfoRepository.find();

////////////////////////////////////////////////////////////////////////////////////////

const getVaccinationInfoById = (id) => getVaccinationInfo().find(vaccineInfo => vaccineInfo.id == id);

const getVaccinationInfoIndexById = (id) => getVaccinationInfo().findIndex(vaccineInfo => vaccineInfo.id == id);

////////////////////////////////////////////////////////////////////////////////////////

const deleteVaccinationInfo =
    async (id, vaccineInfoRepository = getRepository(VaccinationInfo)) => {
        return await vaccineInfoRepository.delete(id);
    }

const updateVaccinationInfo = (id, updatedVaccinationInfo) => {
    const vaccineInfo = getVaccinationInfo();
    const index = getVaccinationInfoIndexById(id);
    if (updatedVaccinationInfo.name) vaccineInfo[index].name = updatedVaccinationInfo.name;
    if (updatedVaccinationInfo.packageNumber) vaccineInfo[index].packageNumber = updatedVaccinationInfo.packageNumber;
    if (updatedVaccinationInfo.expire) vaccineInfo[index].expire = updatedVaccinationInfo.expire;
    if (updatedVaccinationInfo.producedCompany) vaccineInfo[index].producedCompany = updatedVaccinationInfo.producedCompany;
    return vaccineInfo[index];
}


module.exports = {
    getVaccinationInfo,
    getVaccinationInfoById,
    addVaccinationInfo,
    deleteVaccinationInfo,
    updateVaccinationInfo,
}