export class PnWebsitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pn-root h1')).getText();
  }
}
