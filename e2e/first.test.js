/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  const typedText = 'Hello World';
  it('Should type Hello world', async () => {
    const input = element(by.id('input'));
    await input.typeText(typedText);
  });

  it('Should press on button', async () => {
    await element(by.id('button')).tap();
  });
});
