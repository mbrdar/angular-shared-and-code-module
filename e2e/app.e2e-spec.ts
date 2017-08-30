import { AngularServiceTestPage } from './app.po';

describe('angular-service-test App', () => {
  let page: AngularServiceTestPage;

  beforeEach(() => {
    page = new AngularServiceTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
