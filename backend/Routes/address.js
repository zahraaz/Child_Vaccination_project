const express = require('express');

const router = express.Router();

const {getAddress, getAddressById, createNewAddress, deleteAddress, updateAddress} = require('../Controllers/Address');

router.get('/:addressId', getAddressById)
router.delete('/:addressId', deleteAddress)

router.get('/', getAddress);

router.use(express.json());

router.post('/', createNewAddress)
router.put('/:bookId', updateAddress);

module.exports = router;