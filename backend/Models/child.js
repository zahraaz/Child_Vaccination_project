const { getRepository } = require('typeorm');

class Child {
    constructor(id, firstName, secondName,thirdName, fourthName, familyName, motherName, birthDate, gender, address, phoneNumber,email , password, weight, environment) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.thirdName = thirdName;
        this.fourthName = fourthName;
        this.familyName = familyName;
        this.motherName = motherName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        this.weight = weight;
        this.environment = environment;
    }

    static copyFromData = (id, firstName, secondName,thirdName, fourthName, familyName, motherName, birthDate, gender, address, phoneNumber,email , password, weight, environment) =>
        new Child(id, firstName, secondName,thirdName, fourthName, familyName, motherName, birthDate, gender, address, phoneNumber,email , password, weight, environment);

    toString = () =>
        `${this.firstName}${this.firstName}${this.thirdName}${this.fourthName}${this.familyName}: ${this.weight}, born in ${this.birthDate}`;
}



async function addChild(value, childRepository = getRepository(Child)){
    try {
        const password = bcrypt.hashSync(value.password, 7)
        return (await childRepository.save(new Child(value.firstName, value.secondName,value.thirdName, value.fourthName, value.familyName, value.motherName, value.birthDate, value.gender, value.address, value.phoneNumber, value.email, password, value.weight, value.environment)));
    } catch (err) {
        return { message: err }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////

const getChildren =
(childRepository = getRepository(Child)) => childRepository.find();
/////////////////////////////////////////////////////////////////////////////////////////
const getChildById = (id, childRepository =
    getRepository(Child)) => childRepository.findOne(id);

//////////////////////////////////////////////////////////////////////////////////////////

const getChildByCredentials =
    ({ email, password }) => getChildren().find(Child => child.email == email && bcrypt.compareSync(password, child.password));

//////////////////////////////////////////////////////////////////////////////////////////
const deleteChild =
    async (id, childRepository = getRepository(Child)) => {
        return await childRepository.delete(id);
    }

const getChildIndexById = (id) => getChildren().findIndex(Child => Child.id == id);

//////////////////////////////////////////////////////////////////////////////////////////

const updateChild = async (id, updatedChild, childRepository = getRepository(Author)) => {
    const child = getChildIndexById(id);
    if (updatedChild.firstName) child[index].firstName = updatedChild.firstName;
    if (updatedChild.secondName) child[index].secondName = updatedChild.secondName;
    if (updatedChild.thirdName) child[index].thirdName = updatedChild.thirdName;
    if (updatedChild.fourthName) child[index].fourthName = updatedChild.fourthName;
    if (updatedChild.familyName) child[index].familyName = updatedChild.familyName;
    if (updatedChild.motherName) child[index].motherName = updatedChild.motherName;
    if (updatedChild.birthDate) child[index].birthDate = updatedChild.birthDate;
    if (updatedChild.gender) child[index].gender = updatedChild.gender;
    if (updatedChild.address) child[index].address = updatedChild.address;
    if (updatedChild.phoneNumber) child[index].phoneNumber = updatedChild.phoneNumber;
    if (updatedChild.email) child[index].email = updatedChild.email;
    if (updatedChild.password) child[index].password = updatedChild.password;
    if (updatedChild.weight) child[index].weight = updatedChild.weight;
    if (updatedChild.environment) child[index].environment = updatedChild.environment;
    return await childRepository.save(child);
}

module.exports = {
    getChildren,
    getChildById,
    addChild,
    deleteChild,
    updateChild,
}