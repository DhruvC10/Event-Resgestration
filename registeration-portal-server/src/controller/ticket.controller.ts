import { Response } from 'express';
import QRCode from 'qrcode';
import ticketServices from '../services/ticket.services';
import { TicketForm } from '../types/Ticket.types';
import { TypeRequestBody } from '../types/request.types';
import sendRegisterationConfirmationMail from '../services/mail/sendEmailVerificationMail';

const ticketController = {
  validate: async (req: TypeRequestBody<{ email: string }>, res: Response) => {
    const email = req.body.email;

    try {
      // Find the count of tickets having this email
      const count = await ticketServices.getCount(email);
      if (count >= 3) {
        return res
          .status(403)
          .json({ message: 'Cannot book more than 3 Ticket on a Email' });
      }

      return res.status(200).json({ message: 'Can Book Ticket' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Something went wrong...' });
    }
  },

  register: async (
    req: TypeRequestBody<{ ticket: TicketForm }>,
    res: Response,
  ) => {
    const ticket = req.body.ticket;
    if (
      !ticket.email ||
      !ticket.phone ||
      !ticket.username ||
      !ticket.department
    ) {
      return res.status(500).json({ message: 'Please Provide all Fields' });
    }

    try {
      // Find the count of tickets having this email
      const count = await ticketServices.getCount(ticket.email);
      if (count >= 3) {
        return res
          .status(403)
          .json({ message: 'Cannot book more than 3 Ticket on a Email' });
      }

      // TODO: Razor pay logic here
      const ticketId = 'some ticket id';

      // Store the result in the database
      const result = await ticketServices.createTicket(ticket, ticketId);

      // create a qr blob for
      const ticketQR = await QRCode.toDataURL(result._id.toString());

      // Send Email to the user
      await sendRegisterationConfirmationMail(ticket, ticketQR);

      return res
        .status(200)
        .json({ message: 'Can Book Ticket', ticket, ticketQR });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Something went wrong...' });
    }
  },

  scanTicket: async (
    req: TypeRequestBody<{ id: string; password: string }>,
    res: Response,
  ) => {
    const id = req.body.id;
    const password = req.body.password;

    if (!password || password !== process.env['ADMIN_PASSWORD']) {
      return res.status(403).json({ message: 'Unauthorzied Person' });
    }

    try {
      const ticket = await ticketServices.findById(id);

      if (!ticket) {
        return res.status(500).json({
          messsage: 'Ticket is invalid',
        });
      }

      if (ticket?.isUsed) {
        return res.status(200).json({
          ticket,
          isAlreadyUsed: true,
          messsage: 'This Ticket is already Used!!',
        });
      }

      await ticketServices.markTicket(id);

      return res.status(200).json({
        ticket,
        isAlreadyUsed: false,
        message: 'Ticket marked successfully',
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Something went wrong...' });
    }
  },
};

export default ticketController;
