export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  console.log('EVENT BODY:', body);
  return 'thank you';
});
