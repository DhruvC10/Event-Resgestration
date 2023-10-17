import Ticket from '../models/ticket.model';
import { TicketForm } from '../types/Ticket.types';

const ticketServices = {
  getCount: (email: string) => {
    return Ticket.find({ email }).count();
  },
  createTicket: (ticket: TicketForm, ticketId: string) => {
    return Ticket.create({
      ...ticket,
      ticketId,
      isUsed: false,
    });
  },
  findById: (id: string) => {
    return Ticket.findOne({ _id: id });
  },
  markTicket: (id: string) => {
    return Ticket.updateOne({ _id: id }, { isUsed: true });
  },
};

export default ticketServices;
