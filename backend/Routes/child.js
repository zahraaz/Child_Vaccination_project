const express = require('express');

const router = express.Router();

const { getChild, getChildById, createNewChild, deleteChild, updateChild } = require('../Controllers/Child');
const isAdmin = require('../../middlewares/isAdmin');

router.get('/:childId', getChildById)
router.delete('/:childId', deleteChild)

router.get('/', getChild);

router.use(express.json());

router.post('/',
    isAdmin,
    createNewChild)
router.put('/:childId', updateChild);

module.exports = router;