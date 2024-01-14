const express = require('express');

const router = express.Router();

const { getNurses, getNurseById, createNewNurse, deleteNurse, updateNurse} = require('../Controllers/nurse');

router.get('/:nurseId', getNurseById)
router.delete('/:nurseId', deleteNurse)

router.get('/', getNurses);

router.use(express.json());

router.post('/', createNewNurse)
router.put('/:nurseId', updateNurse);

module.exports = router;