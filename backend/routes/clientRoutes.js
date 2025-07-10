import express from 'express';
import multer from 'multer';
import { getClients, addClient } from '../controllers/clientController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getClients);
router.post('/', upload.single('image'), addClient);

export default router;
