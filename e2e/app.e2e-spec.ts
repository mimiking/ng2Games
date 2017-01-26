import { Ng2GamesPage } from './app.po';

describe('ng2-games App', function() {
  let page: Ng2GamesPage;

  beforeEach(() => {
    page = new Ng2GamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
