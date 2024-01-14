const { getRepository } = require('typeorm');
const { getChildById } = require('./child');

class Nurse{
    constructor(id, name, jobTitle) {
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        
    }

    static copyFromData = (id,name,jobTitle) =>
        new Child(id, name, jobTitle );

    toString = () =>
        `${this.id}: ${this.name}`;
}

function addNurse(value) {
    if (!getChildById(value.childId))
        return ({ message: "child not found", })
    const nurse = nurse.copyFromData(
        (nurse[nurse.length - 1]?.id ?? 0) + 1,
        value.name,
        value.jobTitle);
    nurse.push(nurse);
    return nurse;
}
////////////////////////////////////////////////////////////////////////////////////////

const getNurse  = (nurseRepository = getRepository(Nurse)) => 
nurseRepository.find();

////////////////////////////////////////////////////////////////////////////////////////

const getNurseById = (id) => getNurse().find(nurse => nurse.id == id);

const getNurseIndexById = (id) => getNurse().findIndex(nurse => nurse.id == id);

////////////////////////////////////////////////////////////////////////////////////////

const deleteNurse =
    async (id, nurseRepository = getRepository(Nurse)) => {
        return await nurseRepository.delete(id);
    }

const updateNurse = (id, updatedNurse) => {
    const nurse = getNurse();
    const index = getNurseIndexById(id);
    if (updatedNurse.name) nurse[index].name = updatedNurse.name;
    if (updatedNurse.jobTitle) nurse[index].jobTitle = updatedNurse.jobTitle;
    return nurse[index];
}


module.exports = {
    getNurse,
    getNurseById,
    addNurse,
    deleteNurse,
    updateNurse,
}