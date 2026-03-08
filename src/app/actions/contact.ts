'use server';

import nodemailer from 'nodemailer';

/**
 * @fileOverview Server Action for handling contact form submissions using Nodemailer (Gmail SMTP).
 * It uses environment variables GMAIL_USER and GMAIL_APP_PASSWORD.
 * Sanitized to prevent leaking implementation details in the client response.
 */

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    // Simulation mode if credentials are missing
    // Log detailed info to server console only
    console.warn('SMTP Credentials missing. Logging submission:');
    console.log('Inquiry:', { name, email, subject, message });
    
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    return { 
      success: true, 
      simulated: true 
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: 'info@vynsec.com',
      subject: `New Inquiry: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (err) {
    // Log the error on the server for debugging
    console.error('SMTP Error:', err);
    // Return a generic success: false without sensitive details
    return { success: false };
  }
}
