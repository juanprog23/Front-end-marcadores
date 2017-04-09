import { FavFrontPage } from './app.po';

describe('fav-front App', function() {
  let page: FavFrontPage;

  beforeEach(() => {
    page = new FavFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
