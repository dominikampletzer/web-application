const assert = require('assert');

class UseCase2Po {
  get lazyModuleButton() {
    return $('.lazy');
  }

  get title() {
    return $('#useCaseTitle');
  }

  get list() {
    return $('#list');
  }

  get snackBarMessage() {
    return $('#snackBarMessage');
  }

  get spinner() {
    return $('#spinnerContainer');
  }

  getRow(index) {
    return $('#customItem' + (index || '0'));
  }

  getRowText(index) {
    return $('#customItem' + (index || '0')).getText();
  }


  navigateTo() {
    browser.url('http://localhost:4200/');
  }

}

describe('use-case-2 Navigation to lazy module and load data', () => {
  let page;
  beforeEach(() => {
    page = new UseCase2Po();
  });

  it('Should navigate To Component', () => {
    page.navigateTo();
    page.lazyModuleButton.click();
    page.title.waitForDisplayed(1000);
    assert.equal(page.title.getText(), 'Test Fall 2');
  });

  it('Should wait for Data', () => {
    page.navigateTo();
    page.lazyModuleButton.click();

    page.title.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.list.waitForDisplayed(1000);

    assert.equal(page.getRowText(0), 'Item Nr 1ein total nutzloses Objekt42');
    assert.equal(page.getRowText(1), 'Item Nr 2ein total nutzloses Objekt3');
    assert.equal(page.getRowText(2), 'Item Nr 3ein total nutzloses Teil17');
  });

  it('Should interact with Data', () => {
    page.navigateTo();
    page.lazyModuleButton.click();

    page.title.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.list.waitForDisplayed(1000);

    page.getRow(1).click();
    page.snackBarMessage.waitForDisplayed(1000);
    assert.equal(page.snackBarMessage.getText(), 'Item Nr 2 wurde geklickt');
  });
});
