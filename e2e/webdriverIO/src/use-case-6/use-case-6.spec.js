const assert = require('assert');

class UseCase6Po {

  get iFrameButton() {
    return $("#iFrame");
  }

  get intranetButton() {
    return $('*=ntrane');
  }

  get iFrame() {
    return $('#thRosenheim');
  }

  get subTitleFromIntranet() {
    return $('//*[@id="c55958"]/div/h2');
  }

  navigateTo() {
    browser.url('http://localhost:4200/');
  }

}

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
    page.subTitleFromIntranet.waitForDisplayed(5000);
    assert.equal(page.subTitleFromIntranet.getText(), 'Benutzeranmeldung für den geschlossenen Benutzerbereich');
  });

});
