import {browser, by, element, protractor, ProtractorExpectedConditions} from 'protractor';
import {UseCase4Po} from './useCase4.po';

describe('use-case-4 open form in new Tab and interact', () => {
  let page: UseCase4Po;
  const conditions: ProtractorExpectedConditions = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new UseCase4Po();
  });

  it('Should open form in new Tab and move back', async () => {
    page.navigateTo();
    page.formInNewTabButton.click();

    // Hier wird auf den Tab gewechselt, wo sich die neue View befindet
    await browser.getAllWindowHandles().then((handles) => {
      browser.switchTo().window(handles[1]);
    });

    browser.wait(conditions.visibilityOf(page.title), 1000);
    expect(page.title.getText()).toEqual('Test Fall 1');
    browser.close();

    await browser.getAllWindowHandles().then((handles) => {
      browser.switchTo().window(handles[0]);
    });

    browser.wait(conditions.not(conditions.visibilityOf(page.title)), 1000);
    expect(browser.isElementPresent(page.title)).toBeFalsy();
  });

  it('Should open form in new Tab and interact', async () => {
    page.navigateTo();
    page.formInNewTabButton.click();

    // Hier wird auf den Tab gewechselt, wo sich die neue View befindet
    await browser.getAllWindowHandles().then((handles) => {
      browser.switchTo().window(handles[1]);
    });

    browser.wait(conditions.visibilityOf(page.title), 1000);
    expect(page.title.getText()).toEqual('Test Fall 1');

    // modified test from use-case 1
    page.formName.sendKeys('Ampletzer');
    page.formFirstName.sendKeys('Dominik');
    page.formSex.click();
    browser.wait(conditions.elementToBeClickable(element(by.id('sexOption1'))), 1000);
    element(by.id('sexOption1')).click();
    page.saveButton.click();
    browser.wait(conditions.visibilityOf(page.sentName), 5000);
    expect(page.sentName.getText()).toBe('Ampletzer');
    expect(page.sentFirstName.getText()).toBe('Dominik');
    expect(page.sentSex.getText()).toBe('Männlich');

    browser.close();

    await browser.getAllWindowHandles().then((handles) => {
      browser.switchTo().window(handles[0]);
    });

    browser.wait(conditions.not(conditions.visibilityOf(page.title)), 1000);
    expect(browser.isElementPresent(page.title)).toBeFalsy();
    expect(browser.isElementPresent(page.formName)).toBeFalsy();
    expect(browser.isElementPresent(page.sentName)).toBeFalsy();
  });

});
