import { Router } from 'express';
import ticketController from '../../controller/ticket.controller';

const router = Router();

router.post('/validate/email', ticketController.validate);
router.post('/register', ticketController.register);
router.post('/scan', ticketController.scanTicket);

export default router;
