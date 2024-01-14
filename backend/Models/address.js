const { getRepository } = require('typeorm');
const { getChildById } = require('./child');

class  Address{
    constructor(id, city, locality, ally, residence ) {
        this.id = id;
        this.city = city;
        this.locality = locality;
        this.ally = ally;
        this.residence = residence;
        
    }

    static copyFromData = (id, city, locality,ally, residence ) =>
        new Child(id, city, locality, ally, residence );

    toString = () =>
        `${this.city}${this.locality}${this.ally}: ${this.residence}`;
}

function addAddress(value) {
    if (!getChildById(value.childId))
        return ({ message: "child not found", })
    const address = address.copyFromData(
        (address[address.length - 1]?.id ?? 0) + 1,
        value.city,
        value.locality,
        value.ally,
        value.residence);
    address.push(address);
    return address;
}
////////////////////////////////////////////////////////////////////////////////////////

const getAddress  = (addressRepository = getRepository(Address)) => 
addressRepository.find();

////////////////////////////////////////////////////////////////////////////////////////

const getAddressById = (id) => getAddresss().find(address => address.id == id);

const getAddressIndexById = (id) => getAddresss().findIndex(address => address.id == id);

////////////////////////////////////////////////////////////////////////////////////////

const deleteAddress =
    async (id, addressRepository = getRepository(Address)) => {
        return await addressRepository.delete(id);
    }

const updateAddress = (id, updatedAddress) => {
    const address = getAddresss();
    const index = getAddressIndexById(id);
    if (updatedAddress.city) address[index].city = updatedAddress.city;
    if (updatedAddress.locality) address[index].locality = updatedAddress.locality;
    if (updatedAddress.ally) address[index].ally = updatedAddress.ally;
    if (updatedAddress.residence) address[index].residence = updatedAddress.residence;
    return addresss[index];
}


module.exports = {
    getAddress,
    getAddressById,
    addAddress,
    deleteAddress,
    updateAddress,
}