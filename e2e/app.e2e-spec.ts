import { PnWebsitePage } from './app.po';

describe('pn-website App', function() {
  let page: PnWebsitePage;

  beforeEach(() => {
    page = new PnWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
