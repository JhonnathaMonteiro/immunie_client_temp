const sgMail = require('@sendgrid/mail')

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, message } = req.body

  const content = {
    to: process.env.SENDGRID_EMAIL,
    from: process.env.SENDGRID_EMAIL,
    subject: `New Message From - ${email}`,
    text: message,
    html: `
      <h3>Name: ${name}<h3/>
      <h3>Email: ${email}<h3/>
      <p>${message}</p>
    `
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}