import { TicketForm } from '../../types/Ticket.types';
import sendMail from './sendMail';

const sendRegisterationConfirmationMail = async (
  ticket: TicketForm,
  qrCode: string,
) => {
  const senderEmail = process.env['MAIL_USER'];
  const emailSubject = 'Event Registeration Confirmation';
  const emailTemplate = 'user_email_verification';
  const context = {
    qrCode,
    username: ticket.username,
  };

  const mailOptions = {
    from: senderEmail,
    to: ticket.email,
    subject: emailSubject,
    template: emailTemplate,
    context: context,
  };

  return await sendMail(mailOptions);
};

export default sendRegisterationConfirmationMail;
