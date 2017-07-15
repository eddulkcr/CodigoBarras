import { CodBarPage } from './app.po';

describe('cod-bar App', () => {
  let page: CodBarPage;

  beforeEach(() => {
    page = new CodBarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
