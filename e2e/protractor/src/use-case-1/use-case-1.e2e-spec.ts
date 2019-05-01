import {browser, by, element, protractor, ProtractorExpectedConditions} from 'protractor';
import {UseCase1Po} from './use-case-1.po';

describe('use-case-1 Navigation and Form Input', () => {
  let page: UseCase1Po;
  const conditions: ProtractorExpectedConditions = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new UseCase1Po();
  });

  it('Should navigate To Component', () => {
    page.navigateTo();
    page.formButton.click();
    expect(page.title.getText()).toEqual('Test Fall 1');
  });

  it('Should insert Data into Form', () => {
    page.navigateTo();
    page.formButton.click();

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
  });
});
