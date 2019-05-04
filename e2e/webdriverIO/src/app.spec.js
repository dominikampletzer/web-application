const assert = require('assert');

class AppPage {
  navigateTo() {
    browser.url('http://localhost:4200/');
  }

  get title() {
    return $('app-root h1');
  }

  getTitleText() {
    return this.title.getText();
  }
}

describe('workspace-project App', () => {
  it('should display welcome message', () => {
    let page = new AppPage();
    AppPage.navigateTo();
    assert.equal(page.getTitleText(), 'SQS SS-2019 Dummy-Applikation Ampletzer/Voit');
  });

});


