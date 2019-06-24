const assert = require('assert');
const UseCase6Po = require('./use-case-6.po.js');

describe('use-case-6 i-frame interaction', () => {
  let page;

  beforeEach(() => {
    page = new UseCase6Po();
  });

  it('Should open iframe and interact', () => {
    page.navigateTo();
    page.iFrameButton.click();
    page.iFrame.waitForDisplayed(5000);
    browser.switchToFrame(page.iFrame);
    page.intranetButton.waitForDisplayed(5000);
    page.intranetButton.click();
    page.subTitleFromIntranet.waitForDisplayed(30000);
    assert.equal(page.subTitleFromIntranet.getText(), 'Benutzeranmeldung für den geschlossenen Benutzerbereich');
  });

});
