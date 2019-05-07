const assert = require('assert');
const UseCase3Po = require('./use-case-3.po.js');

describe('use-case-3 open dialog with overlapping dialog', () => {
  let page;
  beforeEach(() => {
    page = new UseCase3Po();
  });

  it('Should open dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();
    page.firstTitle.waitForDisplayed(1000);
    assert.equal(page.firstTitle.getText(), 'Test Fall 3');
  });

  it('Should wait for Data', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    page.firstTitle.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.firstList.waitForDisplayed(1000);

    assert.equal(page.getRowText(0), 'Item Nr 1ein total nutzloses Objekt42');
    assert.equal(page.getRowText(1), 'Item Nr 2ein total nutzloses Objekt3');
    assert.equal(page.getRowText(2), 'Item Nr 3ein total nutzloses Teil17');
  });

  it('Should open overlapping Dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    page.firstTitle.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.firstList.waitForDisplayed(1000);

    page.getRow(1).click();

    page.getSecondTitle().waitForDisplayed(1000);
    assert.equal(page.getSecondTitle().getText(), 'Test Fall 3');
  });

  it('Should interact with overlapping Dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    page.firstTitle.waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.firstList.waitForDisplayed(1000);

    page.getRow(1).click();

    page.getSecondTitle().waitForDisplayed(1000);
    assert.equal(page.getSecondTitle().getText(), 'Test Fall 3');

    page.getSecondTitle().waitForDisplayed(1000);
    page.spinner.waitForDisplayed(5000, true);
    page.getSecondList().waitForDisplayed(1000);

    assert.equal(page.getSecondListRow(0).getText(), 'Item Nr 1ein total nutzloses Objekt42');
    assert.equal(page.getSecondListRow(1).getText(), 'Item Nr 2ein total nutzloses Objekt3');
    assert.equal(page.getSecondListRow(2).getText(), 'Item Nr 3ein total nutzloses Teil17');

    page.getSecondListRow(2).click();
    page.snackBarMessage.waitForDisplayed(1000);
    assert.equal(page.snackBarMessage.getText(), 'Item Nr 3 wurde geklickt');
  });
});
