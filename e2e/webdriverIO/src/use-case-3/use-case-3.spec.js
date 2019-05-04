const assert = require('assert');

class UseCase3Po {
  get dialogOpenButton() {
    return $('#openDialogButton');
  }

  get firstTitle() {
    return $('#dialogTitle');
  }

  get spinner() {
    return $('#spinner');
  }

  get firstList() {
    return $('#list');
  }

  get snackBarMessage() {
    return $('#snackBarMessage');
  }


  getRow(index) {
    return $('#customItem' + (index || '0'));
  }

  getRowText(index) {
    return $('#customItem' + (index || '0')).getText();
  }

  getSecondTitle() {
    return $$('#dialogTitle')[1];
  }

  getSecondList() {
    return $$('#list')[1];
  }

  getSecondListRow(index) {
    return $$('#customItem' + index)[1];
  }

  navigateTo() {
    browser.url('http://localhost:4200/');
  }

}

describe('use-case-3 open dialog with overlapping dialog', () => {
  let page;
  beforeEach(() => {
    page = new UseCase3Po();
  });

  it('Should open dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();
    page.firstTitle.waitForDisplayed(1000);
    assert(page.firstTitle.getText(), 'Test Fall 3');
  });

  it('Should wait for Data', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    page.firstTitle.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.firstList.waitForDisplayed(1000);

    assert(page.getRowText(0), 'Item Nr 1ein total nutzloses Objekt42');
    assert(page.getRowText(1), 'Item Nr 2ein total nutzloses Objekt3');
    assert(page.getRowText(2), 'Item Nr 3ein total nutzloses Teil17');
  });

  it('Should open overlapping Dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    page.firstTitle.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.firstList.waitForDisplayed(1000);

    page.getRow(1).click();

    page.getSecondTitle().waitForDisplayed(1000);
    assert(page.getSecondTitle().getText(), 'Test Fall 3');
  });

  it('Should interact with overlapping Dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    page.firstTitle.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.firstList.waitForDisplayed(1000);

    page.getRow(1).click();

    page.getSecondTitle().waitForDisplayed(1000);
    assert(page.getSecondTitle().getText(), 'Test Fall 3');

    page.getSecondTitle().waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.getSecondList().waitForDisplayed(1000);

    assert(page.getSecondListRow(0).getText(), 'Item Nr 1ein total nutzloses Objekt42');
    assert(page.getSecondListRow(1).getText(), 'Item Nr 2ein total nutzloses Objekt3');
    assert(page.getSecondListRow(2).getText(), 'Item Nr 3ein total nutzloses Teil17');

    page.getSecondListRow(2).click();
    page.snackBarMessage.waitForDisplayed(1000);
    assert(page.snackBarMessage.getText(), 'Item Nr 3 wurde geklickt');
  });
});
