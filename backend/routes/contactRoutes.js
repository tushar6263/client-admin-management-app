import express from 'express';
import { getContacts, addContact } from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', addContact);

export default router;
