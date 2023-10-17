import mongoose, { Schema } from 'mongoose';
import { Ticket } from '../types/Ticket.types';

const ticketSchema = new Schema<Ticket>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  phone: { type: String, required: true },
  ticketId: { type: Number, required: true },
  isUsed: { type: Boolean, required: true },
});

export default mongoose.model<Ticket>('Ticket', ticketSchema);
