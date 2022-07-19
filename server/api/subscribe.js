import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  try {
    await mailchimp.lists.addListMember(process.env.AUDIENCE_ID, {
      email_address: body.email,
      status: 'subscribed',
    });
    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
});
