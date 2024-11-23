import Mailgun from 'mailgun.js';
import formData from 'form-data';

// Initialize Mailgun client
const mailgun = new Mailgun(formData);
const key = process.env.MAILGUN_API_KEY;
if (!key) throw new Error('MAILGUN_API_KEY is not set');

const mg = mailgun.client({
  username: 'api',  
  key,
  url: 'https://api.eu.mailgun.net'
});

export default mg