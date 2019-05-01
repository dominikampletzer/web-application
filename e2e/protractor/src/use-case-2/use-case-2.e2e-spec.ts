import {browser, protractor, ProtractorExpectedConditions} from 'protractor';
import {UseCase2Po} from './useCase2.po';

describe('use-case-2 Navigation to lazy module and load data', () => {
  let page: UseCase2Po;
  const conditions: ProtractorExpectedConditions = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new UseCase2Po();
  });

  it('Should navigate To Component', () => {
    page.navigateTo();
    page.lazyModuleButton.click();
    browser.wait(conditions.visibilityOf(page.getUseCaseTitle()), 1000);
    expect(page.getUseCaseTitle().getText()).toEqual('Test Fall 2');
  });

  it('Should wait for Data', () => {
    page.navigateTo();
    page.lazyModuleButton.click();

    browser.wait(conditions.and(
      conditions.visibilityOf(page.getUseCaseTitle()),
      conditions.invisibilityOf(page.getSpinner()))
      , 5000);
    browser.wait(conditions.visibilityOf(page.getList()), 1000);
    expect(page.getRowText(0)).toBe('Item Nr 1ein total nutzloses Objekt42');
    expect(page.getRowText(1)).toBe('Item Nr 2ein total nutzloses Objekt3');
    expect(page.getRowText(2)).toBe('Item Nr 3ein total nutzloses Teil17');
  });

  it('Should interact with Data', () => {
    page.navigateTo();
    page.lazyModuleButton.click();

    browser.wait(conditions.visibilityOf(page.getUseCaseTitle()), 1000);
    browser.wait(conditions.invisibilityOf(page.getSpinner()), 5000);
    browser.wait(conditions.visibilityOf(page.getList()), 1000);

    page.getRow(1).click();
    browser.wait(conditions.visibilityOf(page.getSnackBar()), 1000);
    expect(page.getSnackBar().getText()).toBe('Item Nr 2 wurde geklickt');
  });
});