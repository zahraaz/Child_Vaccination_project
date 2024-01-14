const { getAddress: getAddressModel, addAddress, getAddressById:
     getAddressByIdModel, deleteAddress: deleteAddressModel, updateAddress: updateAddressModel } = require('../models/address')

function getAddress(req, res, next) {
    getAddressModel().then(addresss => res.json(addresss));
}

function getAddressById(req, res, next) {
    getAddressByIdModel(req.params.addressId).then(addresss =>
        res.status(addresss ? 200 : 404).json(addresss ?? {
            message: "No address found"
        }));
}

function deleteAddress(req, res, next) {
    deleteAddressModel(req.params.addressId).then(deletedAddress =>
        res.status(deletedAddress ? 202 : 404).json(deletedAddress ?? { message: 'Address not found' })
    )
}

async function createNewAddress(req, res, next) {
    const body = req.body;

    if (!body.city)
        return res.status(400).json({ message: "Your city is required" })
    if (body.city.length < 3)
        return res.status(400).json({ message: "Your city name is too short" })
    if (!body.locality)
        return res.status(400).json({ message: "Your locality is required" })
    if (body.locality.length < 3)
        return res.status(400).json({ message: "Your locality name is too short" })
    if (!body.ally)
        return res.status(400).json({ message: "Your ally is required" })
    if (body.ally.length < 3)
        return res.status(400).json({ message: "Your ally name is too short" })
    if (!body.residence)
        return res.status(400).json({ message: "Your residence is required" })
    if (body.residence.length < 3)
        return res.status(400).json({ message: "Your resoience name is too short" })



    await addAddress(body).then(address => {
        res.json(address);
    })
}

function updateAddress(req, res, next) {
    const body = req.body;

    if ((body.city) && (body.city.length < 3))
        return res.status(400).json({ message: "Your name is too short" })

    updateAddressModel(req.params.addressId, body).then(updatedAddress =>
        res.json(updatedAddress)
    )
}

module.exports = {
    getAddress,
    getAddressById,
    createNewAddress,
    deleteAddress,
    updateAddress,
}