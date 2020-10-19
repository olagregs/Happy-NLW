import { Router } from 'express';
import multer from 'multer';

import uploadCofig from './config/upload';
import OrphanagesController from './controllers/orphanagesControllers';

const routes = Router();
const upload = multer(uploadCofig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;