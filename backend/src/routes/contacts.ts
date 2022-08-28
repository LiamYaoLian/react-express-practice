const express = require('express');
const router = express.Router();
import {getContacts, createContact, updateContactById, deleteContactById, getContactById} from "../controllers/contact-controller";

router.get('/', getContacts);

router.post('/create', createContact);

router.post('/:id/update', updateContactById);

router.post('/:id/delete', deleteContactById);

router.get('/:id', getContactById);

module.exports = router;
