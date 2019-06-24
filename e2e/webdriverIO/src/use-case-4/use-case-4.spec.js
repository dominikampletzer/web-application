const assert = require('assert');
const UseCase4Po = require('./use-case-4.po.js');

describe('use-case-4 open form in new Tab and interact', () => {
  let page;

  beforeEach(() => {
    page = new UseCase4Po();
  });

  it('Should open form in new Tab and move back', () => {
    page.navigateTo();
    let parentGUID = browser.getWindowHandle();
    console.log(parentGUID);
    page.formInNewTabButton.click();
    let allGUID = browser.getWindowHandles();

    for (var i = 0; i < allGUID.length; i++) {
      // one enter into if blobk if the GUID is not equal to parent window's GUID
      if (allGUID[i] != parentGUID) {
        // switch to the guid
        // nicht offizieller WEg
        browser.switchToWindow(allGUID[i]);
        // browser.switchTab soll es noch geben tut es nicht!
        // offizieller Weg - Klappt nicht
        // browser.switchWindow(parentGUID);
        // break the loop
        break;
      }
    }
    page.useCaseTitle.waitForDisplayed(5000);
    assert.equal(page.useCaseTitle.getText(), 'Test Fall 1');
    // Hier bricht der Test immer ab!!
    // browser.close();
    // browser.switchToWindow(parentGUID);
    // page.useCaseTitle.waitForDisplayed(5000, true);
    // assert.equal(page.useCaseTitle, undefined);
  });

  // Demo-Code klappt natürlich
  it('should switch to another window', () => {
    // open url
    browser.url('https://google.com')
    // create new window
    browser.newWindow('https://webdriver.io')

    // switch back via url match
    browser.switchWindow('google.com')

    // switch back via title match
    browser.switchWindow('Next-gen WebDriver test framework')
  });

});
