import express from 'express';
import multer from 'multer';
import { getProjects, addProject } from '../controllers/projectController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getProjects);
router.post('/', upload.single('image'), addProject);

export default router;
