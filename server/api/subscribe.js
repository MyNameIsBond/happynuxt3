import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: useRuntimeConfig().key,
  server: useRuntimeConfig().server,
});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  try {
    await mailchimp.lists.addListMember(useRuntimeConfig().id, {
      email_address: body.email,
      status: 'subscribed',
    });
    return { error: false, message: 'You are now subscribed' };
  } catch (error) {
    return { error: true, message: 'Something went wrong, try again.' };
  }
});
