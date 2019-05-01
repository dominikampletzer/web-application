import {browser, by, element, protractor, ProtractorExpectedConditions} from 'protractor';
import {UseCase1Po} from './useCase1.po';

describe('use-case-1 Navigation and Form Input', () => {
  let page: UseCase1Po;
  const conditions: ProtractorExpectedConditions = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new UseCase1Po();
  });

  it('Should navigate To Component', () => {
    page.navigateTo();
    page.formButton.click();
    expect(page.getUseCaseTitle().getText()).toEqual('Test Fall 1');
  });

  it('Should insert Data into Form', () => {
    page.navigateTo();
    page.formButton.click();

    page.getFormName().sendKeys('Ampletzer');
    page.getFormFirstName().sendKeys('Dominik');

    page.getFormSex().click();
    browser.wait(conditions.elementToBeClickable(element(by.id('sexOption1'))), 1000);
    element(by.id('sexOption1')).click();

    page.getFormSaveButton().click();

    browser.wait(conditions.visibilityOf(element(by.id('sentName'))), 5000);
    expect(element(by.id('sentName')).getText()).toBe('Ampletzer');
    expect(element(by.id('sentFirstName')).getText()).toBe('Dominik');
    expect(element(by.id('sentFirstSex')).getText()).toBe('Männlich');
  });
});
