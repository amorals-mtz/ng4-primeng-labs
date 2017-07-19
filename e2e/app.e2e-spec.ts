import { Ng4PrimengBasicsPage } from './app.po';

describe('ng4-primeng-basics App', () => {
  let page: Ng4PrimengBasicsPage;

  beforeEach(() => {
    page = new Ng4PrimengBasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
