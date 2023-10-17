export type Ticket = {
  ticketId: number;
  username: string;
  email: string;
  department: string;
  phone: string;
  isUsed: boolean;
};

export type TicketForm = {
  username: string;
  email: string;
  department: string;
  phone: string;
};

export default {};
