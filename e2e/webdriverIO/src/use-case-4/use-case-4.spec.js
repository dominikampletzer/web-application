const assert = require('assert');

class UseCase4Po {
  get formInNewTabButton() {
    return $('#formInNewTabButton');
  }

  navigateTo() {
    browser.url('http://localhost:4200/');
  }

  get title() {
    return $('#useCaseTitle');
  }
}

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
        browser.switchToWindow(allGUID[i]);
        // break the loop
        break;
      }
    }
    page.title.waitForDisplayed(5000);
    assert.equal(page.title.getText(), 'Test Fall 1');
    // browser.close();
    // browser.switchToWindow(parentGUID);
    // page.title.waitForDisplayed(5000, true);
    // assert.equal(page.title, undefined);
  });

  // xit('Should open form in new Tab and interact', async () => {
  //   page.navigateTo();
  //   page.formInNewTabButton.click();
  //
  //   // Hier wird auf den Tab gewechselt, wo sich die neue View befindet
  //   await browser.getAllWindowHandles().then((handles) => {
  //     browser.switchTo().window(handles[1]);
  //   });
  //
  //   page.title.waitForDisplayed(1000);
  //   assert.equal(page.title.getText(), 'Test Fall 1');
  //
  //   // modified test from use-case 1
  //   page.formName.sendKeys('Ampletzer');
  //   page.formFirstName.sendKeys('Dominik');
  //   page.formSex.click();
  //   $('#sexOption1').waitForDisplayed(1000);
  //   element(by.id('sexOption1')).click();
  //   page.saveButton.click();
  //   page.sentName.waitForDisplayed(5000);
  //   assert.equal(page.sentName.getText(), 'Ampletzer');
  //   assert.equal(page.sentFirstName.getText(), 'Dominik');
  //   assert.equal(page.sentSex.getText(), 'Männlich');
  //
  //   browser.close();
  //   await browser.getAllWindowHandles().then((handles) => {
  //     browser.switchTo().window(handles[0]);
  //   });
  //
  //   page.title.waitForDisplayed(1000, true);
  //   assert.equal(page.title, undefined);
  //   assert.equal(page.formName, undefined);
  //   assert.equal(page.sentName, undefined);
  // });

});
