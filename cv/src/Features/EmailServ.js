import emailjs from 'emailjs-com';

// Configure Email.js with your User ID and Service ID
emailjs.init('<YOUR_USER_ID>');

export const sendReminderEmail = (recipientEmail) => {
  // Prepare the email parameters
  const templateParams = {
    to_email: recipientEmail,
    from_name: 'Your Application',
    subject: 'Vaccination Reminder',
    message: 'This is a reminder that your next vaccination date is approaching in 3 days.',
  };

  // Send the email using Email.js
  emailjs.send('<YOUR_SERVICE_ID>', '<YOUR_TEMPLATE_ID>', templateParams)
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
};
