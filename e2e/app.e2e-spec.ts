import { SchichtplanerFrontendPage } from './app.po';

describe('schichtplaner-frontend App', () => {
  let page: SchichtplanerFrontendPage;

  beforeEach(() => {
    page = new SchichtplanerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
