import {browser, protractor, ProtractorExpectedConditions} from 'protractor';
import {UseCase3Po} from './use-case-3.po';

describe('use-case-3 open dialog with overlapping dialog', () => {
  let page: UseCase3Po;
  const conditions: ProtractorExpectedConditions = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new UseCase3Po();
  });

  it('Should open dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();
    browser.wait(conditions.visibilityOf(page.firstTitle), 1000);
    expect(page.firstTitle.getText()).toEqual('Test Fall 3');
  });

  it('Should wait for Data', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    browser.wait(conditions.visibilityOf(page.firstTitle), 1000);
    browser.wait(conditions.invisibilityOf(page.firstSpinner), 5000);
    browser.wait(conditions.visibilityOf(page.firstList), 1000);

    expect(page.getRowText(0)).toBe('Item Nr 1ein total nutzloses Objekt42');
    expect(page.getRowText(1)).toBe('Item Nr 2ein total nutzloses Objekt3');
    expect(page.getRowText(2)).toBe('Item Nr 3ein total nutzloses Teil17');
  });

  it('Should open overlapping Dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    browser.wait(conditions.visibilityOf(page.firstTitle), 1000);
    browser.wait(conditions.invisibilityOf(page.firstSpinner), 5000);
    browser.wait(conditions.visibilityOf(page.firstList), 1000);

    page.getRow(1).click();

    browser.wait(conditions.visibilityOf(page.getSecondTitle()), 1000);
    expect(page.getSecondTitle().getText()).toEqual('Test Fall 3');
  });

  it('Should interact with overlapping Dialog', () => {
    page.navigateTo();
    page.dialogOpenButton.click();

    browser.wait(conditions.visibilityOf(page.firstTitle), 1000);
    browser.wait(conditions.invisibilityOf(page.firstSpinner), 5000);
    browser.wait(conditions.visibilityOf(page.firstList), 1000);

    page.getRow(1).click();

    browser.wait(conditions.visibilityOf(page.getSecondTitle()), 1000);
    expect(page.getSecondTitle().getText()).toEqual('Test Fall 3');

    browser.wait(conditions.visibilityOf(page.getSecondTitle()), 1000);
    browser.wait(conditions.invisibilityOf(page.getSecondSpinner()), 5000);
    browser.wait(conditions.visibilityOf(page.getSecondList()), 1000);

    expect(page.getSecondListRowText(0)).toBe('Item Nr 1ein total nutzloses Objekt42');
    expect(page.getSecondListRowText(1)).toBe('Item Nr 2ein total nutzloses Objekt3');
    expect(page.getSecondListRowText(2)).toBe('Item Nr 3ein total nutzloses Teil17');

    page.getSecondListRow(2).click();
    browser.wait(conditions.visibilityOf(page.snackBarMessage), 1000);
    expect(page.snackBarMessage.getText()).toBe('Item Nr 3 wurde geklickt');
  });
});
